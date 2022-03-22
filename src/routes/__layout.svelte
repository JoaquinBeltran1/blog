<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../app.css";
</script>

<div class="justify-center px-4 bg selection:bg-orange-200 ">
  <div class="test m-auto flex flex-col h-screen">
    <Header />

    <main class="flex-auto pt-32">
      <slot />
    </main>

    <Footer />
  </div>
</div>

<style>
  @media (min-width: 1150px) {
    .test {
      width: 1150px;
      padding-left: 6px;
      padding-right: 6px;
    }
  }
  .bg {
    background-color: rgb(255, 250, 244);
  }
</style>
