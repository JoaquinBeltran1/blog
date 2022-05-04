<script>
  import { page } from "$app/stores";
</script>

<header class="flex-initial">
  <ul class="flex pt-8 text-2xl font-extralight blue justify-end space-x-10 pr-10">
    <li class:active={$page.url.pathname === "/"}>
      <a href="/" class="hover:text-blue-300 ">Home</a>
    </li>
    <li class:active={$page.url.pathname === "/blog"}>
      <a href="/blog" class="hover:text-blue-300 ">Blog</a>
    </li>
    <li class:active={$page.url.pathname === "/about"}>
      <a href="/about" class="hover:text-blue-300">About</a>
    </li>
  </ul>
</header>

<style>
  .active {
    text-decoration: underline;
  }
  .active:hover {
    color: rgb(30 64 175);
  }
  .blue {
    color: #344ea2;
  }
</style>
