<script lang="ts">
  import logo from "$lib/assets/mark.svg";
  import AssignmentCard from "$lib/components/AssignmentCard.svelte";
  import { buttonVariants } from "$lib/components/button/Button.variants";

  // TODO: Section should be a component. Lots of styling duplication.
  // TODO: AssignmentsCards should get their data from an object and be looped over.
  // TODO: FieldNotes needs a design
</script>

<svelte:head>
  <title>Nick Richardson - Home</title>
</svelte:head>

<section
  class="border border-neutral-300 bg-neutral-100 p-3 flex flex-col items-center gap-4 mb-4"
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
      <p class="text-neutral-700 leading-5.5 pl-px">
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
<section
  class="border border-neutral-300 bg-neutral-100 h-12 grid place-items-center mb-4"
>
  LOGOS HERE
</section>
<section
  class="bg-neutral-100 border border-neutral-300 p-3 flex flex-col gap-2 mb-4"
>
  <h2
    class="text-xl font-medium font-display text-neutral-800 uppercase text-center"
  >
    Assignments
  </h2>
  <AssignmentCard
    name="Catalyst"
    href="/assignments/catalyst"
    status="ACTIVE"
  />
  <AssignmentCard
    name="Datapoint"
    href="/assignments/datapoint"
    status="COMPLETE"
  />
  <AssignmentCard name="Zentra" href="/assignments/zentra" status="COMPLETE" />
</section>
<section
  class="bg-neutral-100 border border-neutral-300 p-3 flex flex-col gap-2"
>
  <h2
    class="text-xl font-medium font-display text-neutral-800 uppercase text-center"
  >
    Field Notes
  </h2>
</section>
