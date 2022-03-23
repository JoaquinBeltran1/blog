<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../app.css";
</script>

<div class="h-screen font-inter">
  <div class=" selection:bg-blue-200 flex flex-col h-full">
    <div class="flex flex-col md:flex-row parent">
      <div class=" border-b pb-4 md:pb-0 md:border-r md:border-b-0 border-gray-300 px-8 pt-8">
        <Header />
      </div>
      <main class="pt-8 px-10 w-full">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</div>

<style>
  .parent {
    flex: 1 1 auto;
  }
</style>
