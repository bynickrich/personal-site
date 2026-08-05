<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<article
  class="prose-headings:font-display prose-a:text-accent-600 prose-a:underline prose-a:font-medium prose-h2:text-2xl overflow-clip prose-p:text-neutral-700 prose-headings:uppercase prose-p:mb-3 flex flex-col gap-3"
>
  {@render children()}
</article>
