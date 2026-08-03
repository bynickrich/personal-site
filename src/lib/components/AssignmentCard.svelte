<script lang="ts">
  type Props = {
    href: string;
    name: string;
    status: "ACTIVE" | "COMPLETE";
  };
  let { href, name, status }: Props = $props();
</script>

<a class="border border-neutral-300 bg-neutral-100 block" {href}>
  <figure class="grid place-items-center uppercase min-h-52 font-medium">
    Isometric illustration here
  </figure>
  <div
    class="flex justify-between px-2 border-t border-neutral-300 h-8 items-center uppercase font-medium text-sm text-neutral-700"
  >
    <p>>{name}</p>
    <p>{status}</p>
    <!-- TODO: Add square with color that reflects status. If active us tailwind pulse animation -->
  </div>
</a>
