<script lang="ts">
	import { onMount } from 'svelte';

	type Pattern = 'sphere' | 'wave' | 'ripple' | 'warp';

	type Props = {
		pattern?: Pattern;
		front?: string;
		back?: string;
		pixelSize?: number;
		speed?: number;
		seed?: number;
		label?: string;
		class?: string;
	};

	let {
		pattern = 'sphere',
		front = 'var(--color-accent-700)',
		back = 'var(--color-neutral-100)',
		pixelSize = 3,
		speed = 0.18,
		seed = 0,
		label = '',
		class: className = ''
	}: Props = $props();

	let canvas: HTMLCanvasElement;
	let supported = $state(true);

	const vertexShader = `#version 300 es
		in vec2 a_position;
		out vec2 v_uv;

		void main() {
			v_uv = a_position * 0.5 + 0.5;
			gl_Position = vec4(a_position, 0.0, 1.0);
		}
	`;

	const fragmentShader = `#version 300 es
		precision highp float;

		in vec2 v_uv;
		out vec4 fragColor;

		uniform vec2 u_resolution;
		uniform float u_time;
		uniform float u_pixelSize;
		uniform float u_seed;
		uniform int u_pattern;
		uniform vec3 u_front;
		uniform vec3 u_back;

		float hash(vec2 p) {
			p = fract(p * vec2(123.34, 456.21));
			p += dot(p, p + 45.32 + u_seed);
			return fract(p.x * p.y);
		}

		float noise(vec2 p) {
			vec2 cell = floor(p);
			vec2 local = fract(p);
			local = local * local * (3.0 - 2.0 * local);

			return mix(
				mix(hash(cell), hash(cell + vec2(1.0, 0.0)), local.x),
				mix(hash(cell + vec2(0.0, 1.0)), hash(cell + 1.0), local.x),
				local.y
			);
		}

		float fbm(vec2 p) {
			float value = 0.0;
			float amplitude = 0.5;

			for (int octave = 0; octave < 4; octave++) {
				value += amplitude * noise(p);
				p = mat2(1.6, 1.2, -1.2, 1.6) * p;
				amplitude *= 0.5;
			}

			return value;
		}

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

		float sphere(vec2 p, float time) {
			p *= 1.12;
			p.x += sin(time * 0.7 + u_seed) * 0.12;
			float radiusSquared = dot(p, p);

			if (radiusSquared > 1.0) return 0.0;

			vec3 normal = vec3(p, sqrt(1.0 - radiusSquared));
			vec3 light = normalize(vec3(cos(time), sin(time * 0.8), 0.8));
			float lighting = dot(normal, light) * 0.5 + 0.5;
			float texture = noise(p * 3.0 + vec2(time * 0.12, -time * 0.08));

			return smoothstep(0.0, 0.12, 1.0 - radiusSquared) * mix(lighting, texture, 0.18);
		}

		float field(vec2 p, float time) {
			if (u_pattern == 0) return sphere(p, time);

			if (u_pattern == 1) {
				float bend = sin(p.y * 2.6 - time * 0.7) * 0.28;
				return sin((p.x + bend) * 6.0 + time) * 0.5 + 0.5;
			}

			if (u_pattern == 2) {
				float distanceFromCenter = length(p + vec2(0.18, -0.1));
				return sin(distanceFromCenter * 11.0 - time * 1.4) * 0.5 + 0.5;
			}

			vec2 warp = vec2(
				fbm(p * 1.8 + time * 0.08),
				fbm(p * 1.8 - time * 0.06 + 8.3)
			);
			return fbm(p * 2.2 + warp * 2.1);
		}

		void main() {
			vec2 grid = floor(gl_FragCoord.xy / u_pixelSize);
			vec2 samplePosition = (grid * u_pixelSize + u_pixelSize * 0.5) / u_resolution;
			vec2 p = (samplePosition * 2.0 - 1.0) * u_resolution / min(u_resolution.x, u_resolution.y);
			float value = clamp(field(p, u_time), 0.0, 1.0);
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
		const seedLocation = gl.getUniformLocation(program, 'u_seed');
		const patternLocation = gl.getUniformLocation(program, 'u_pattern');
		const frontLocation = gl.getUniformLocation(program, 'u_front');
		const backLocation = gl.getUniformLocation(program, 'u_back');
		const patternIndex: Record<Pattern, number> = { sphere: 0, wave: 1, ripple: 2, warp: 3 };
		const frontColor = resolveCssColor(front);
		const backColor = resolveCssColor(back);

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

			gl.useProgram(program);
			gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
			gl.uniform1f(timeLocation, time * 0.001 * speed);
			gl.uniform1f(pixelSizeLocation, Math.max(1, pixelSize * Math.min(devicePixelRatio, 2)));
			gl.uniform1f(seedLocation, seed);
			gl.uniform1i(patternLocation, patternIndex[pattern]);
			gl.uniform3fv(frontLocation, frontColor);
			gl.uniform3fv(backLocation, backColor);
			gl.drawArrays(gl.TRIANGLES, 0, 3);

			if (visible && !reducedMotion.matches && !document.hidden && speed !== 0) {
				frame = requestAnimationFrame(render);
			}
		}

		function restart() {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(render);
		}

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
		restart();

		return () => {
			cancelAnimationFrame(frame);
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
			reducedMotion.removeEventListener('change', restart);
			document.removeEventListener('visibilitychange', restart);
			gl.deleteBuffer(position);
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
