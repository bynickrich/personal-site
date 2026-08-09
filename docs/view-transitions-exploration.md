# View Transitions Exploration

## Purpose

Explore route transitions that reinforce the portfolio's military-industrial visual language without making navigation feel slow or ornamental.

The recommended split is:

- Use the native View Transition API for route-to-route navigation.
- Continue using Svelte transitions for local interface state such as the mobile navigation, overlays, dialogs, and conditional content.

SvelteKit does not add a route-transition abstraction. Its `onNavigate` lifecycle hook provides the integration point, while the animation itself uses the browser's `document.startViewTransition()`, CSS animations, and View Transition pseudo-elements.

## Current site context

The root layout in `src/routes/+layout.svelte` keeps three regions mounted:

1. `Navbar`
2. Route content inside `<main>`
3. `Footer`

The Navbar already uses Svelte's `fly` and `fade` transitions for its mobile menu and overlay. Those should remain Svelte transitions because they represent component state rather than navigation.

For the first route experiment, decide whether the whole document should transition or whether the Navbar and Footer should remain visually fixed while only `<main>` changes.

## Recommended learning path

### 1. Start with the visual overview

[Supercharge Web UX with View Transitions](https://www.youtube.com/watch?v=pMaAHpKFEAo) by Bramus Van Damme is a roughly 30-minute introduction covering same-document and cross-document transitions, CSS customization, JavaScript control, and practical demonstrations.

### 2. Work through the main technical guide

[Same-document view transitions for single-page applications](https://developer.chrome.com/docs/web-platform/view-transitions/same-document) by Jake Archibald and Bramus is the most relevant deep dive for SvelteKit. It covers:

- How snapshots and the generated pseudo-element tree work
- Custom animations for the old and new views
- Shared elements with `view-transition-name`
- Entry and exit animations
- `view-transition-class`
- Directional transition types
- Asynchronous updates and image loading
- Aspect-ratio changes
- DevTools debugging
- Reduced-motion handling

### 3. Use MDN as the reference manual

[Using the View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using) explains the complete transition lifecycle, snapshot model, CSS pseudo-elements, JavaScript promises, transition types, and a cursor-originated circular reveal.

Related references:

- [View Transition API overview](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [`Document.startViewTransition()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition)
- [Using view transition types](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using_types)

### 4. Dissect working demos

[Bramus's View Transitions demo gallery](https://view-transitions.chrome.dev/) provides live examples and source code. Start with:

- [Circle reveal](https://view-transitions.chrome.dev/circle/spa/)
- [Off the Beaten Path](https://view-transitions.chrome.dev/off-the-beaten-path/spa/) for coordinated motion
- Stack Navigator for forward and backward movement
- Profiles for list-to-detail shared elements
- Cards for `view-transition-class` and `match-element`
- [Complete demo source](https://github.com/bramus/view-transitions-demos)

### 5. Add the SvelteKit bridge

Return to [Unlocking view transitions in SvelteKit](https://svelte.dev/blog/view-transitions) after understanding the browser API. The Svelte-specific part is deliberately small: use `onNavigate` to start the transition before SvelteKit updates the route DOM.

## Core mental model

For a SvelteKit client-side navigation:

1. SvelteKit loads the destination route's code and data.
2. `onNavigate` runs immediately before the route DOM changes.
3. `document.startViewTransition()` captures the old visual state.
4. SvelteKit updates the DOM.
5. The browser captures the new state.
6. CSS animations run between the generated old and new snapshots.
7. The snapshots are discarded when the animation finishes.

The transition is not an animation of two complete, live Svelte pages. The old state is a static snapshot, while the incoming state becomes the live page.

The browser generates a structure conceptually similar to:

```text
::view-transition
└── ::view-transition-group(root)
    └── ::view-transition-image-pair(root)
        ├── ::view-transition-old(root)
        └── ::view-transition-new(root)
```

Giving an element a unique `view-transition-name` creates another group that can move, resize, and animate independently from the root snapshot.

## SvelteKit integration sketch

This is an exploration sketch, not yet implemented:

```svelte
<script lang="ts">
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (
			!document.startViewTransition ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			return;
		}

		return new Promise<void>((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>
```

Unsupported browsers and people who prefer reduced motion receive the normal instantaneous navigation.

Start with the browser's default crossfade before adding any custom CSS. This isolates integration problems from animation-design problems.

## Military-industrial motion vocabulary

The strongest direction is controlled machinery rather than generalized glitch effects. Motion should communicate hierarchy, direction, and continuity.

### Persistent command frame

Keep the Navbar, Footer, grid, or other structural chrome stable while route content changes inside them. This makes the site feel like a persistent field terminal loading a new briefing rather than replacing the entire interface.

Relevant tools:

- A dedicated transition name for `<main>`
- Separate names for persistent layout elements
- Root transition disabled or subdued if necessary

### Assignment handoff

Transform an assignment card into its case-study header. The card title, classification metadata, and primary image can become shared elements that move into their destination positions.

This is likely the best first signature effect because it explains the relationship between the assignment index and the detailed briefing.

Relevant tools:

- Unique, matching `view-transition-name` values
- Temporary names applied only to the selected card
- Explicit handling for the reverse transition
- `object-fit` control when image aspect ratios change

### Tactical aperture

Reveal the incoming view from the point of interaction using an angular polygon or circular `clip-path`. A circular reveal can suggest radar or an optical system; an angular polygon can feel more mechanical.

Relevant tools:

- `ViewTransition.ready`
- Web Animations API
- `clip-path`
- Last pointer position or the triggering element's bounding box

### Mechanical shutter

Use opposing hard-edged masks or panels to close over the old briefing and expose the new one. Keep it fast enough that it reads as a mechanism, not a loading screen.

Relevant tools:

- Custom old/new snapshot animations
- `clip-path: inset()` or polygon animation
- Separate named regions if multiple panels must move independently

### Scanner pass

Reveal the incoming content with a narrow moving edge and a temporary accent line. The page itself should stay readable and relatively still; the scanner line provides the character.

Relevant tools:

- A clipped incoming snapshot
- A short-lived decorative overlay
- Coordinated CSS keyframes

### Directional deployment

Use different motion for moving deeper into the information hierarchy and returning to the index. Opening an assignment could advance inward or forward, while returning could reverse that direction.

Relevant tools:

- View transition types such as `open-assignment`, `close-assignment`, `advance`, and `return`
- `:active-view-transition-type()` selectors
- Browser history and route relationship detection

## Motion principles

- Prefer short durations, initially around 150–240 ms.
- Use decisive easing with little or no bounce.
- Keep translations small unless direction is important.
- Let movement express navigation depth or element continuity.
- Preserve stable landmarks such as navigation and page framing.
- Avoid animating every visible object independently.
- Use accent lines, masks, and clipping sparingly.
- Treat reduced motion as a distinct, intentionally designed state.
- Test mobile separately; viewport-wide motion feels stronger on small screens.

## Suggested exploration sequence

### Experiment 1: Baseline route crossfade

- Add the `onNavigate` integration to the root layout.
- Use the browser's default transition with no custom CSS.
- Verify internal navigation, browser back/forward, and rapid repeated navigation.
- Verify normal navigation when View Transitions are unavailable.
- Verify reduced-motion behavior.

Goal: prove the SvelteKit lifecycle integration.

### Experiment 2: Transition only the briefing content

- Keep the Navbar and Footer stationary.
- Give `<main>` its own transition identity.
- Try a short fade with a 4–12 px horizontal or vertical offset.
- Compare desktop and mobile behavior.

Goal: establish the site's default route-transition grammar.

### Experiment 3: Assignment card to case study

- Select one assignment card and its destination case study.
- Match only the title first.
- Add the image after title movement is reliable.
- Handle the reverse transition back to the assignment list.
- Test different card positions and scroll locations.

Goal: create one meaningful shared-element transition before broadening the system.

### Experiment 4: Signature reveal

- Prototype either the tactical aperture or scanner pass.
- Apply it only to a purposeful route or navigation type.
- Compare it with the quieter default transition.
- Decide whether it adds hierarchy or only spectacle.

Goal: identify one recognizable effect that supports the visual world without dominating navigation.

## Common pitfalls

- Every rendered `view-transition-name` must be unique. Duplicate names can cause the transition to be skipped.
- The default root snapshot includes the entire page, including persistent navigation and backgrounds.
- Long work inside the update callback freezes the visual state and makes navigation feel stalled. Load data before starting the transition whenever possible.
- Old and new snapshots are rendered in a transition overlay, so normal stacking assumptions may not apply.
- Default snapshot blending can produce unexpected transparency or flashing.
- Shared images with different aspect ratios may need explicit `object-fit` and clipping rules.
- Backward navigation needs an intentionally reversed or distinct transition.
- Rapid navigation can interrupt an active transition.
- A transition that looks restrained on desktop may feel excessive on mobile.
- Effects must be tested with `prefers-reduced-motion: reduce`.

## Definition of a successful first pass

The first implementation is successful when:

- Route navigation remains immediate and usable without API support.
- The Navbar and Footer do not flicker or drift unexpectedly.
- Back and forward navigation feel intentional.
- The effect works from different scroll positions.
- Mobile navigation remains usable.
- Reduced-motion behavior is verified.
- The transition communicates where the user went rather than merely decorating the change.
