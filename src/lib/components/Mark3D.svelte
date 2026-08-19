<script lang="ts">
	import mark from '$lib/assets/mark.svg';
	import type { Attachment } from 'svelte/attachments';
	import * as THREE from 'three';

	type Props = {
		class?: string;
		label?: string;
		front?: string;
		pixelSize?: number;
		rotationSpeed?: number;
		separation?: number;
		shadowFloor?: number;
	};

	let {
		class: className = '',
		label = 'Rotating 3D Nick Richardson mark',
		front = 'var(--color-accent-500)',
		pixelSize = 2,
		rotationSpeed = 0.4,
		separation = 0.08,
		shadowFloor = 0.36
	}: Props = $props();

	let ready = $state(false);
	let presented = $state(false);
	let supported = $state(true);

	const sceneUrl = '/mark-3d/mark-3d.splinecode';

	const postVertexShader = `
		void main() {
			gl_Position = vec4(position, 1.0);
		}
	`;

	const postFragmentShader = `
		precision highp float;

		out vec4 fragColor;

		uniform sampler2D u_scene;
		uniform vec2 u_resolution;
		uniform float u_time;
		uniform float u_pixelSize;
		uniform float u_separation;
		uniform float u_shadowFloor;
		uniform vec3 u_front;

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

		void main() {
			vec2 grid = floor(gl_FragCoord.xy / u_pixelSize);
			vec2 samplePosition = (grid * u_pixelSize + u_pixelSize * 0.5) / u_resolution;
			vec4 sceneSample = texture(u_scene, samplePosition);
			float luminance = dot(sceneSample.rgb, vec3(0.299, 0.587, 0.114));
			float tone = clamp((luminance - 0.5) * 1.3 + 0.65, 0.0, 1.0);
			vec2 sampleStep = vec2(u_pixelSize) / u_resolution;
			float left = dot(texture(u_scene, samplePosition - vec2(sampleStep.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
			float right = dot(texture(u_scene, samplePosition + vec2(sampleStep.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
			float down = dot(texture(u_scene, samplePosition - vec2(0.0, sampleStep.y)).rgb, vec3(0.299, 0.587, 0.114));
			float up = dot(texture(u_scene, samplePosition + vec2(0.0, sampleStep.y)).rgb, vec3(0.299, 0.587, 0.114));
			float edge = length(vec2(right - left, up - down));
			tone -= smoothstep(0.015, 0.18, edge) * u_separation;
			tone = mix(u_shadowFloor, 0.9, tone);
			float drift = sin((samplePosition.x * 0.85 + samplePosition.y * 1.15) * 6.283185 + u_time);
			float value = sceneSample.a * clamp(tone + drift * 0.035, 0.0, 1.0);
			float ink = step(bayer4(grid), value);

			fragColor = vec4(u_front * ink, ink);
		}
	`;

	function resolveCssColor(value: string, canvas: HTMLCanvasElement) {
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

		if (!context) return new THREE.Vector3();

		context.fillStyle = computedColor;
		context.fillRect(0, 0, 1, 1);
		const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;

		return new THREE.Vector3(red / 255, green / 255, blue / 255);
	}

	function disposeObject(root: THREE.Object3D) {
		root.traverse((child) => {
			if (!(child instanceof THREE.Mesh)) return;

			child.geometry.dispose();
			const materials = Array.isArray(child.material) ? child.material : [child.material];

			for (const material of materials) {
				for (const value of Object.values(material)) {
					if (value instanceof THREE.Texture) value.dispose();
				}

				material.dispose();
			}
		});
	}

	const initializeRenderer: Attachment<HTMLCanvasElement> = (canvas) => {
		let renderer: THREE.WebGLRenderer;

		try {
			renderer = new THREE.WebGLRenderer({
				canvas,
				alpha: true,
				antialias: true,
				powerPreference: 'high-performance'
			});
		} catch (error) {
			console.error('Could not create the mark-3d renderer.', error);
			supported = false;
			return;
		}

		const scene = new THREE.Scene();
		const assetRoot = new THREE.Group();
		const camera = new THREE.OrthographicCamera(-2.25, 2.25, 2.25, -2.25, 0.1, 100);
		const renderTarget = new THREE.WebGLRenderTarget(1, 1, {
			format: THREE.RGBAFormat,
			depthBuffer: true,
			stencilBuffer: false
		});
		const postScene = new THREE.Scene();
		const postCamera = new THREE.Camera();
		const postGeometry = new THREE.PlaneGeometry(2, 2);
		const postMaterial = new THREE.ShaderMaterial({
			glslVersion: THREE.GLSL3,
			transparent: true,
			depthTest: false,
			depthWrite: false,
			vertexShader: postVertexShader,
			fragmentShader: postFragmentShader,
			uniforms: {
				u_scene: { value: renderTarget.texture },
				u_resolution: { value: new THREE.Vector2(1, 1) },
				u_time: { value: 0 },
				u_pixelSize: { value: pixelSize },
				u_separation: { value: separation },
				u_shadowFloor: { value: shadowFloor },
				u_front: { value: resolveCssColor(front, canvas) }
			}
		});

		camera.position.set(5, 5, 5);
		camera.lookAt(0, 0, 0);
		scene.add(assetRoot);
		postScene.add(new THREE.Mesh(postGeometry, postMaterial));

		renderer.setClearColor(0x000000, 0);
		renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		let frame = 0;
		let visible = true;
		let disposed = false;
		let previousTime = 0;
		let loadedScene: THREE.Object3D | undefined;
		const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

		function resize() {
			const bounds = canvas.getBoundingClientRect();
			const width = Math.max(1, Math.round(bounds.width));
			const height = Math.max(1, Math.round(bounds.height));
			const pixelRatio = renderer.getPixelRatio();

			if (
				canvas.width === Math.round(width * pixelRatio) &&
				canvas.height === Math.round(height * pixelRatio)
			) {
				return;
			}

			renderer.setSize(width, height, false);
			const drawingBufferSize = renderer.getDrawingBufferSize(new THREE.Vector2());
			renderTarget.setSize(drawingBufferSize.x, drawingBufferSize.y);
			postMaterial.uniforms.u_resolution.value.copy(drawingBufferSize);
			postMaterial.uniforms.u_pixelSize.value = Math.max(1, pixelSize * pixelRatio);

			const aspect = width / height;
			const viewSize = 4.5;
			camera.left = (-viewSize * aspect) / 2;
			camera.right = (viewSize * aspect) / 2;
			camera.top = viewSize / 2;
			camera.bottom = -viewSize / 2;
			camera.updateProjectionMatrix();
		}

		function render(time: number) {
			resize();
			const delta = previousTime === 0 ? 0 : Math.min((time - previousTime) / 1000, 0.05);
			previousTime = time;

			if (ready && !reducedMotion.matches) {
				assetRoot.rotation.y += delta * rotationSpeed;
			}
			postMaterial.uniforms.u_time.value = time * 0.001;

			renderer.setRenderTarget(renderTarget);
			renderer.clear();
			renderer.render(scene, camera);
			renderer.setRenderTarget(null);
			renderer.clear();
			renderer.render(postScene, postCamera);
			if (ready && !presented) presented = true;

			if (visible && !document.hidden && ready && !reducedMotion.matches) {
				frame = requestAnimationFrame(render);
			}
		}

		function restart() {
			cancelAnimationFrame(frame);
			previousTime = 0;
			frame = requestAnimationFrame(render);
		}

		function handleLoadError(error: unknown) {
			if (disposed) return;

			console.error('Could not load the mark-3d Spline scene.', error);
			supported = false;
			cancelAnimationFrame(frame);
		}

		void import('@splinetool/loader')
			.then(({ default: SplineLoader }) => {
				if (disposed) return;

				const loader = new SplineLoader();
				loader.load(
					sceneUrl,
					(splineScene) => {
						if (disposed) {
							disposeObject(splineScene);
							return;
						}

						loadedScene = splineScene;
						const bounds = new THREE.Box3().setFromObject(splineScene);
						const size = bounds.getSize(new THREE.Vector3());
						const largestDimension = Math.max(size.x, size.y, size.z);

						if (largestDimension > 0) splineScene.scale.setScalar(3.2 / largestDimension);
						splineScene.updateMatrixWorld(true);
						const scaledCenter = new THREE.Box3()
							.setFromObject(splineScene)
							.getCenter(new THREE.Vector3());
						splineScene.position.sub(scaledCenter);
						assetRoot.rotation.set(0, 0, 0);
						assetRoot.add(splineScene);
						ready = true;
						restart();
					},
					undefined,
					handleLoadError
				);
			})
			.catch(handleLoadError);

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
			disposed = true;
			cancelAnimationFrame(frame);
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
			reducedMotion.removeEventListener('change', restart);
			document.removeEventListener('visibilitychange', restart);
			if (loadedScene) disposeObject(loadedScene);
			postGeometry.dispose();
			postMaterial.dispose();
			renderTarget.dispose();
			renderer.dispose();
		};
	};
</script>

<div class="mark-3d {className}" class:mark-3d-fallback={!supported} role="img" aria-label={label}>
	<div
		class="mark-3d-poster"
		class:mark-3d-visible={!presented || !supported}
		style={`--mark-image: url("${mark}")`}
		aria-hidden="true"
	></div>
	<canvas
		{@attach initializeRenderer}
		class:mark-3d-visible={presented && supported}
		aria-hidden="true"
	></canvas>
</div>

<style>
	.mark-3d {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	canvas,
	.mark-3d-poster {
		position: absolute;
		inset: 0;
		display: block;
		opacity: 0;
		transition: opacity 320ms ease-out;
	}

	canvas {
		width: 100%;
		height: 100%;
	}

	.mark-3d-poster {
		width: 71.111%;
		height: 71.111%;
		margin: auto;
		background-image: radial-gradient(circle, var(--color-accent-500) 0 60%, transparent 66%);
		background-size: 4px 4px;
		-webkit-mask: var(--mark-image) center / contain no-repeat;
		mask: var(--mark-image) center / contain no-repeat;
	}

	.mark-3d-visible {
		opacity: 1;
	}

	.mark-3d-fallback .mark-3d-poster {
		opacity: 0.7;
	}

	@media (prefers-reduced-motion: reduce) {
		canvas,
		.mark-3d-poster {
			transition: none;
		}
	}
</style>
