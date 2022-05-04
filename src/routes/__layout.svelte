<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../app.css";
</script>

<div class="h-screen flex flex-col bg-white selection:bg-blue-200">
  <Header />
  <main class="py-16 flex-auto bg-white">
    <slot />
  </main>
  <Footer />
</div>

<style>
</style>
