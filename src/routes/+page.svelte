<script lang="ts">
  import logo from "$lib/assets/mark.svg";
  import { buttonVariants } from "$lib/components/button/Button.variants";
</script>

<svelte:head>
  <title>Nick Richardson - Home</title>
</svelte:head>

<section
  class="border border-neutral-300 bg-neutral-100 p-3 flex flex-col items-center gap-4"
>
  <figure
    class="size-80 border border-neutral-300 grid place-items-center font-medium"
  >
    ISOMETRIC ANIMATION HERE
  </figure>
  <div class="flex flex-col gap-2">
    <p
      class="flex gap-1 items-center font-medium uppercase text-sm text-neutral-700 tracking-wide"
    >
      <img src={logo} alt="Logo" class="inline size-3" />Design Engineer
    </p>
    <div class="flex flex-col gap-1">
      <h1 class="font-display text-3xl">Nick Richardson</h1>
      <p class="text-neutral-700 leading-5.5">
        Design designer with a decade of product design experience that can also
        code. Operating in React, Next.js, Tailwind, TypeScript, and my personal
        favorite Svelte.
      </p>
    </div>
  </div>
  <div class="flex gap-4 w-full">
    <a href="/assignments" class={buttonVariants({ class: "w-full" })}
      >Assignments</a
    >
    <a
      href="/contact"
      class={buttonVariants({ color: "outline", class: "w-full" })}>Contact</a
    >
  </div>
</section>
