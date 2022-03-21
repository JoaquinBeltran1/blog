<script>
  import { page } from "$app/stores";
</script>

<header>
  <ul class="flex justify-center space-x-4 pt-4 text-xl font-semibold blue">
    <li class="hover:text-blue-400" class:active={$page.url.pathname === "/"}>
      <a href="/">Home</a>
    </li>
    <li class="hover:text-blue-400" class:active={$page.url.pathname === "/blog"}>
      <a href="/blog">Blog</a>
    </li>
    <li class="hover:text-blue-400" class:active={$page.url.pathname === "/about"}>
      <a href="/about">About</a>
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
    color: rgb(52, 78, 162);
  }
</style>
