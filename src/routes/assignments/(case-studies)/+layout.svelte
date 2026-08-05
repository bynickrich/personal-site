<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<article
  class="prose-headings:font-display prose-a:text-accent-600 prose-a:underline prose-a:font-medium prose-h2:text-2xl overflow-clip border border-neutral-300 bg-neutral-100 p-3 prose-p:text-neutral-700 prose-headings:uppercase prose-p:mb-3"
>
  {@render children()}
</article>
