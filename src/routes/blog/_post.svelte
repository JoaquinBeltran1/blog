<script>
  export let title;
  export let date;
  export let tags;
</script>

<hr class="pb-6" />
<div class="blue">
  <div class="md:flex space-y-3 md:space-y-0 justify-between items-baseline">
    <h1 class="text-4xl font-extralight">{title}</h1>
    <p>{date}</p>
  </div>

  <div class="py-20">
    <slot />
  </div>
  <hr class="pb-6" />
  {#if tags}
    <div class="flex space-x-2 ">
      {#each tags as tag}
        <h2 class="rounded-md border px-2 bg-white font-semibold">
          {tag}
        </h2>
      {/each}
    </div>
  {:else}
    <p />
  {/if}
</div>

<style>
  .blue {
    color: rgb(52, 78, 162);
  }
</style>
