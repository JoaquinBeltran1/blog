<script>
  import Header from "$lib/components/Header.svelte";
  import "../app.css";
</script>

<div class="justify-center px-4 test m-auto bg-red-200">
  <Header />

  <main>
    <slot />
  </main>

  <footer>Hello, I'm the footer.</footer>
</div>

<style>
  @media (min-width: 1150px) {
    .test {
      width: 1150px;
      padding-left: 6px;
      padding-right: 6px;
    }
  }
</style>
