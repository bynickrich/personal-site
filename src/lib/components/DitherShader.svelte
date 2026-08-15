<script lang="ts">
	import { onMount } from 'svelte';

	type Props = {
		image?: string;
		hoverImage?: string;
		active?: boolean;
		imageScale?: number;
		contrast?: number;
		brightness?: number;
		separation?: number;
		shadowFloor?: number;
		motion?: number;
		front?: string;
		back?: string;
		pixelSize?: number;
		label?: string;
		class?: string;
	};

	let {
		image,
		hoverImage,
		active = false,
		imageScale = 0.9,
		contrast = 1.35,
		brightness = 0,
		separation = 0,
		shadowFloor = 0.08,
		motion = 0.035,
		front = 'var(--color-accent-500)',
		back = 'var(--color-neutral-100)',
		pixelSize = 3,
		label = '',
		class: className = ''
	}: Props = $props();

	let canvas: HTMLCanvasElement;
	let supported = $state(true);
	let restartRenderer = () => {};

	$effect(() => {
		active;
		restartRenderer();
	});

	const vertexShader = `#version 300 es
		in vec2 a_position;

		void main() {
			gl_Position = vec4(a_position, 0.0, 1.0);
		}
	`;

	const fragmentShader = `#version 300 es
		precision highp float;

		out vec4 fragColor;

		uniform vec2 u_resolution;
		uniform float u_time;
		uniform float u_pixelSize;
		uniform sampler2D u_image;
		uniform sampler2D u_hoverImage;
		uniform float u_imageAspect;
		uniform float u_hoverImageAspect;
		uniform float u_hoverMix;
		uniform float u_imageScale;
		uniform float u_contrast;
		uniform float u_brightness;
		uniform float u_separation;
		uniform float u_shadowFloor;
		uniform float u_motion;
		uniform vec3 u_front;
		uniform vec3 u_back;

		float bayer4(vec2 pixel) {
			int x = int(mod(pixel.x, 4.0));
			int y = int(mod(pixel.y, 4.0));
			int index = x + y * 4;
			float matrix[16] = float[16](
				0.0, 8.0, 2.0, 10.0,
				12.0, 4.0, 14.0, 6.0,
				3.0, 11.0, 1.0, 9.0,
				15.0, 7.0, 13.0, 5.0
			);

			return (matrix[index] + 0.5) / 16.0;
		}

		vec4 sampleTexture(sampler2D sourceTexture, vec2 uv, float imageAspect) {
			vec2 imageUv = uv - 0.5;
			float canvasAspect = u_resolution.x / u_resolution.y;
			float containScale = min(1.0, canvasAspect / imageAspect);
			imageUv.x *= canvasAspect / imageAspect;
			imageUv /= u_imageScale * containScale;
			imageUv += 0.5;

			if (
				imageUv.x < 0.0 || imageUv.x > 1.0 ||
				imageUv.y < 0.0 || imageUv.y > 1.0
			) return vec4(0.0);

			return texture(sourceTexture, imageUv);
		}

		vec4 sampleImage(vec2 uv) {
			return mix(
				sampleTexture(u_image, uv, u_imageAspect),
				sampleTexture(u_hoverImage, uv, u_hoverImageAspect),
				u_hoverMix
			);
		}

		void main() {
			vec2 grid = floor(gl_FragCoord.xy / u_pixelSize);
			vec2 samplePosition = (grid * u_pixelSize + u_pixelSize * 0.5) / u_resolution;
			vec4 imageSample = sampleImage(samplePosition);
			float luminance = dot(imageSample.rgb, vec3(0.299, 0.587, 0.114));
			float tone = clamp((luminance - 0.5) * u_contrast + 0.5 + u_brightness, 0.0, 1.0);
			vec2 sampleStep = vec2(u_pixelSize) / u_resolution;
			float left = dot(sampleImage(samplePosition - vec2(sampleStep.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
			float right = dot(sampleImage(samplePosition + vec2(sampleStep.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
			float down = dot(sampleImage(samplePosition - vec2(0.0, sampleStep.y)).rgb, vec3(0.299, 0.587, 0.114));
			float up = dot(sampleImage(samplePosition + vec2(0.0, sampleStep.y)).rgb, vec3(0.299, 0.587, 0.114));
			float edge = length(vec2(right - left, up - down));
			tone -= smoothstep(0.015, 0.18, edge) * u_separation;
			tone = mix(u_shadowFloor, 0.9, tone);
			float drift = sin((samplePosition.x * 0.85 + samplePosition.y * 1.15) * 6.283185 + u_time);
			float value = imageSample.a * clamp(tone + drift * u_motion, 0.0, 1.0);

			float ink = step(bayer4(grid), value);

			fragColor = vec4(mix(u_back, u_front, ink), 1.0);
		}
	`;

	function compileShader(gl: WebGL2RenderingContext, type: number, source: string) {
		const shader = gl.createShader(type);

		if (!shader) throw new Error('Could not create shader.');

		gl.shaderSource(shader, source);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			const message = gl.getShaderInfoLog(shader);
			gl.deleteShader(shader);
			throw new Error(message ?? 'Could not compile shader.');
		}

		return shader;
	}

	function resolveCssColor(value: string) {
		const probe = document.createElement('span');
		probe.style.color = value;
		probe.style.position = 'absolute';
		probe.style.visibility = 'hidden';
		canvas.parentElement?.append(probe);

		const computedColor = getComputedStyle(probe).color;
		probe.remove();

		const colorCanvas = document.createElement('canvas');
		colorCanvas.width = 1;
		colorCanvas.height = 1;
		const context = colorCanvas.getContext('2d', { willReadFrequently: true });

		if (!context) return [0, 0, 0] as const;

		context.fillStyle = computedColor;
		context.fillRect(0, 0, 1, 1);
		const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;

		return [red / 255, green / 255, blue / 255] as const;
	}

	function cropTransparentImage(source: HTMLImageElement, maxSize: number) {
		const sourceCanvas = document.createElement('canvas');
		sourceCanvas.width = source.naturalWidth;
		sourceCanvas.height = source.naturalHeight;
		const sourceContext = sourceCanvas.getContext('2d', { willReadFrequently: true });

		if (!sourceContext) return sourceCanvas;

		sourceContext.drawImage(source, 0, 0);
		const pixels = sourceContext.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height).data;
		let minX = sourceCanvas.width;
		let minY = sourceCanvas.height;
		let maxX = -1;
		let maxY = -1;

		for (let y = 0; y < sourceCanvas.height; y += 1) {
			for (let x = 0; x < sourceCanvas.width; x += 1) {
				if (pixels[(y * sourceCanvas.width + x) * 4 + 3] < 4) continue;

				minX = Math.min(minX, x);
				minY = Math.min(minY, y);
				maxX = Math.max(maxX, x);
				maxY = Math.max(maxY, y);
			}
		}

		if (maxX < minX || maxY < minY) return sourceCanvas;

		const padding = Math.ceil(Math.max(maxX - minX, maxY - minY) * 0.06);
		const cropX = Math.max(0, minX - padding);
		const cropY = Math.max(0, minY - padding);
		const cropWidth = Math.min(sourceCanvas.width - cropX, maxX - minX + 1 + padding * 2);
		const cropHeight = Math.min(sourceCanvas.height - cropY, maxY - minY + 1 + padding * 2);
		const scale = Math.min(1, maxSize / Math.max(cropWidth, cropHeight));
		const output = document.createElement('canvas');
		output.width = Math.max(1, Math.round(cropWidth * scale));
		output.height = Math.max(1, Math.round(cropHeight * scale));
		const outputContext = output.getContext('2d');

		outputContext?.drawImage(
			source,
			cropX,
			cropY,
			cropWidth,
			cropHeight,
			0,
			0,
			output.width,
			output.height
		);

		return output;
	}

	onMount(() => {
		const context = canvas.getContext('webgl2', {
			alpha: false,
			antialias: false,
			depth: false,
			powerPreference: 'low-power'
		});

		if (!context) {
			supported = false;
			return;
		}

		const gl = context;

		let program: WebGLProgram | null = null;
		let frame = 0;
		let visible = true;
		let disposed = false;
		let imageAspect = 1;
		let hoverImageAspect = 1;
		let hoverReady = false;
		let hoverMix = 0;
		let previousTime = 0;
		const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

		try {
			const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexShader);
			const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
			program = gl.createProgram();

			if (!program) throw new Error('Could not create shader program.');

			gl.attachShader(program, vertex);
			gl.attachShader(program, fragment);
			gl.linkProgram(program);
			gl.deleteShader(vertex);
			gl.deleteShader(fragment);

			if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
				throw new Error(gl.getProgramInfoLog(program) ?? 'Could not link shader program.');
			}
		} catch (error) {
			console.error(error);
			supported = false;
			return;
		}

		const position = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, position);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

		gl.useProgram(program);
		const positionLocation = gl.getAttribLocation(program, 'a_position');
		gl.enableVertexAttribArray(positionLocation);
		gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

		const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
		const timeLocation = gl.getUniformLocation(program, 'u_time');
		const pixelSizeLocation = gl.getUniformLocation(program, 'u_pixelSize');
		const imageLocation = gl.getUniformLocation(program, 'u_image');
		const hoverImageLocation = gl.getUniformLocation(program, 'u_hoverImage');
		const imageAspectLocation = gl.getUniformLocation(program, 'u_imageAspect');
		const hoverImageAspectLocation = gl.getUniformLocation(program, 'u_hoverImageAspect');
		const hoverMixLocation = gl.getUniformLocation(program, 'u_hoverMix');
		const imageScaleLocation = gl.getUniformLocation(program, 'u_imageScale');
		const contrastLocation = gl.getUniformLocation(program, 'u_contrast');
		const brightnessLocation = gl.getUniformLocation(program, 'u_brightness');
		const separationLocation = gl.getUniformLocation(program, 'u_separation');
		const shadowFloorLocation = gl.getUniformLocation(program, 'u_shadowFloor');
		const motionLocation = gl.getUniformLocation(program, 'u_motion');
		const frontLocation = gl.getUniformLocation(program, 'u_front');
		const backLocation = gl.getUniformLocation(program, 'u_back');
		const frontColor = resolveCssColor(front);
		const backColor = resolveCssColor(back);
		function createImageTexture(textureUnit: number) {
			const texture = gl.createTexture();
			gl.activeTexture(textureUnit);
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texImage2D(
				gl.TEXTURE_2D,
				0,
				gl.RGBA,
				1,
				1,
				0,
				gl.RGBA,
				gl.UNSIGNED_BYTE,
				new Uint8Array([0, 0, 0, 0])
			);

			return texture;
		}

		const imageTexture = createImageTexture(gl.TEXTURE0);
		const hoverImageTexture = createImageTexture(gl.TEXTURE1);

		async function loadImageTexture(
			sourceUrl: string | undefined,
			texture: WebGLTexture | null,
			textureUnit: number,
			onLoad: (aspect: number) => void
		) {
			if (!sourceUrl || !texture) return;

			try {
				const source = new Image();
				source.decoding = 'async';
				source.src = sourceUrl;
				await source.decode();

				if (disposed) return;

				const cropped = cropTransparentImage(
					source,
					Math.min(2048, gl.getParameter(gl.MAX_TEXTURE_SIZE))
				);
				onLoad(cropped.width / cropped.height);
				gl.activeTexture(textureUnit);
				gl.bindTexture(gl.TEXTURE_2D, texture);
				gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, cropped);
				restart();
			} catch (error) {
				console.error(`Could not load dither image: ${sourceUrl}`, error);
			}
		}

		function resize() {
			const bounds = canvas.getBoundingClientRect();
			const ratio = Math.min(devicePixelRatio, 2);
			const width = Math.max(1, Math.round(bounds.width * ratio));
			const height = Math.max(1, Math.round(bounds.height * ratio));

			if (canvas.width !== width || canvas.height !== height) {
				canvas.width = width;
				canvas.height = height;
				gl.viewport(0, 0, width, height);
			}
		}

		function render(time: number) {
			resize();
			const elapsed = previousTime === 0 ? 16 : Math.min(time - previousTime, 50);
			const hoverTarget = active && hoverReady ? 1 : 0;
			previousTime = time;

			if (reducedMotion.matches) hoverMix = hoverTarget;
			else hoverMix += (hoverTarget - hoverMix) * Math.min(1, elapsed / 90);

			gl.useProgram(program);
			gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
			gl.uniform1f(timeLocation, time * 0.001);
			gl.uniform1f(pixelSizeLocation, Math.max(1, pixelSize * Math.min(devicePixelRatio, 2)));
			gl.uniform1i(imageLocation, 0);
			gl.uniform1i(hoverImageLocation, 1);
			gl.uniform1f(imageAspectLocation, imageAspect);
			gl.uniform1f(hoverImageAspectLocation, hoverImageAspect);
			gl.uniform1f(hoverMixLocation, hoverMix);
			gl.uniform1f(imageScaleLocation, imageScale);
			gl.uniform1f(contrastLocation, contrast);
			gl.uniform1f(brightnessLocation, brightness);
			gl.uniform1f(separationLocation, separation);
			gl.uniform1f(shadowFloorLocation, shadowFloor);
			gl.uniform1f(motionLocation, motion);
			gl.uniform3fv(frontLocation, frontColor);
			gl.uniform3fv(backLocation, backColor);
			gl.drawArrays(gl.TRIANGLES, 0, 3);

			const transitioning = Math.abs(hoverTarget - hoverMix) > 0.001;
			if (
				visible &&
				!document.hidden &&
				((!reducedMotion.matches && motion !== 0) || transitioning)
			) {
				frame = requestAnimationFrame(render);
			}
		}

		function restart() {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(render);
		}

		restartRenderer = restart;

		const resizeObserver = new ResizeObserver(restart);
		const intersectionObserver = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			if (visible) restart();
			else cancelAnimationFrame(frame);
		});

		resizeObserver.observe(canvas);
		intersectionObserver.observe(canvas);
		reducedMotion.addEventListener('change', restart);
		document.addEventListener('visibilitychange', restart);
		void loadImageTexture(image, imageTexture, gl.TEXTURE0, (aspect) => {
			imageAspect = aspect;
		});
		void loadImageTexture(hoverImage, hoverImageTexture, gl.TEXTURE1, (aspect) => {
			hoverImageAspect = aspect;
			hoverReady = true;
		});
		restart();

		return () => {
			disposed = true;
			cancelAnimationFrame(frame);
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
			reducedMotion.removeEventListener('change', restart);
			document.removeEventListener('visibilitychange', restart);
			restartRenderer = () => {};
			gl.deleteBuffer(position);
			gl.deleteTexture(imageTexture);
			gl.deleteTexture(hoverImageTexture);
			gl.deleteProgram(program);
		};
	});
</script>

<div
	class="dither-shell {className}"
	class:dither-fallback={!supported}
	style:--dither-front={front}
	style:--dither-back={back}
>
	<canvas
		bind:this={canvas}
		class="size-full"
		role={label ? 'img' : undefined}
		aria-label={label || undefined}
		aria-hidden={label ? undefined : 'true'}
	></canvas>
</div>

<style>
	.dither-shell {
		width: 100%;
		height: 100%;
		background: var(--dither-back);
		overflow: hidden;
	}

	canvas {
		display: block;
	}

	.dither-fallback {
		background-color: var(--dither-back);
		background-image: repeating-linear-gradient(
			135deg,
			transparent 0 8px,
			var(--dither-front) 8px 10px
		);
	}

	.dither-fallback canvas {
		display: none;
	}
</style>
