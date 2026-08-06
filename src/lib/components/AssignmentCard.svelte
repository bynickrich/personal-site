<script lang="ts">
  type Props = {
    href: string;
    name: string;
    projectType: string;
    summary: string;
    role: string;
    year: string;
    status: "IN PROGRESS" | "PUBLISHED";
  };

  let { href, name, projectType, summary, role, year, status }: Props =
    $props();
</script>

<a class="flex aspect-square flex-col justify-end border border-neutral-300 bg-neutral-100" {href}>
	<figure class="h-full w-full bg-accent-600/30 p-2"></figure>
	<div class="flex flex-col border-t border-neutral-300 p-3">
		<h3 class="font-display text-lg uppercase">{name}</h3>
		<p class="leading-5 text-neutral-700">{summary}</p>
	</div>
</a>
