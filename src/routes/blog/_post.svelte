<script context="module">
  import "prismjs";
  import "prismjs/themes/prism-nord.css";
</script>

<script>
  export let title;
  export let date;
</script>

<svelte:head>
  <title>{title} | Joaquin Beltran</title>
</svelte:head>

<div class="blue pr-10 pt-4">
  <div class="md:flex space-x-6 md:space-y-0 justify-between items-baseline">
    <h1 class="text-3xl">{title}</h1>
    <p>{date}</p>
  </div>

  <div class="py-20 prose max-w-none prose-headings:font-normal prose-li:leading-6 text-justify blog-width">
    <slot class="" />
  </div>
</div>

<style>
  .blog-width {
    max-width: 900px;
  }
  .blue {
    color: rgb(52, 78, 162);
  }
</style>
