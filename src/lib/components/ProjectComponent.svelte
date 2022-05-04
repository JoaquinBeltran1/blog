<script>
  export let descr;
  export let title;
  export let page;
</script>

<a href="/{page}" class="lg:flex lg:justify-between">
  <div class="pt-6 lg:pt-8">
    <h1 class="font-light">{title}</h1>

    <p class="text-2xl blue-descr">{descr}</p>
  </div>
</a>

<style>
  .blue-descr {
    color: #4b5062;
  }
</style>
