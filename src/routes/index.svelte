<script>
  import ProjectComponent from "$lib/components/ProjectComponent.svelte";
</script>

<svelte:head>
  <title>Home | Joaquin Beltran</title>
</svelte:head>

<div class="text-5xl font-extralight leading-tight blue lg:flex justify-between px-10 w-full">
  <div class="py-20 lg:py-64 lg:w-1/2 bg-blue text-white px-4 lg:px-10 mr-10">
    <h1>Hello, I'm Joaquin Beltran</h1>
    <h1>Here I'll write about...</h1>
  </div>

  <ul class="text-5xl mb-10 lg:mb-0 lg:w-1/2 pl-10 pb-8 pt-16">
    <ProjectComponent page="Bldrdsh" title="BLDRDSH - HMBGGRY" descr="Fake SaaS Data Generator" />
    <ProjectComponent page="Noname" title="Noname" descr="Garden App - FastAPI + SvelteKit" />
    <ProjectComponent page="DataAnalysis" title="Data analysis" descr="Portfolio with data analysis and visualisations" />
    <ProjectComponent page="Sisqueda" title="Sisqueda" descr="Website for our wine" />
  </ul>
</div>

<style>
  .bg-blue {
    background-color: #344ea2;
  }
  .blue {
    color: #344ea2;
  }
</style>
