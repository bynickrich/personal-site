<script lang="ts">
  import logo from "$lib/assets/mark.svg";
  import AssignmentCard from "$lib/components/AssignmentCard.svelte";
  import { buttonVariants } from "$lib/components/button/Button.variants";
  import SectionContainer from "$lib/components/SectionContainer.svelte";

  // TODO: Section should be a component. Lots of styling duplication.
  // TODO: AssignmentsCards should get their data from an object and be looped over.
  // TODO: FieldNotes needs a design
</script>

<svelte:head>
  <title>Nick Richardson - Home</title>
</svelte:head>

<SectionContainer>
  <figure
    class="grid size-80 place-items-center border border-neutral-300 font-medium"
  >
    ISOMETRIC ANIMATION HERE
  </figure>
  <div class="flex flex-col gap-2">
    <p
      class="flex items-center gap-1 text-sm font-medium tracking-wide text-neutral-700 uppercase"
    >
      <img src={logo} alt="Logo" class="inline size-3" />Design Engineer
    </p>
    <div class="flex flex-col gap-1">
      <h1 class="font-display text-3xl">Nick Richardson</h1>
      <p class="pl-px leading-5.5 text-neutral-700">
        Design engineer with a decade of product design experience that can also
        code. Operating in React, Next.js, Tailwind, TypeScript, and my personal
        favorite Svelte.
      </p>
    </div>
  </div>
  <div class="flex w-full gap-4">
    <a href="/assignments" class={buttonVariants({ class: "w-full" })}
      >Assignments</a
    >
    <a
      href="/contact"
      class={buttonVariants({ color: "outline", class: "w-full" })}>Contact</a
    >
  </div>
</SectionContainer>
<SectionContainer>LOGOS HERE</SectionContainer>
<SectionContainer>
  <h2
    class="text-center font-display text-xl font-medium text-neutral-800 uppercase"
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
</SectionContainer>

<SectionContainer
  ><h2
    class="text-center font-display text-xl font-medium text-neutral-800 uppercase"
  >
    Field Notes
  </h2>
</SectionContainer>
