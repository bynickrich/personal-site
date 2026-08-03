<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<section
  class="bg-neutral-100 border border-neutral-300 p-3 flex flex-col gap-2 mb-4"
>
  {@render children()}
</section>
