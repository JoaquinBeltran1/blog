<script>
  import { page } from "$app/stores";
</script>

<header class="w-56">
  <a href="/" class=" text-5xl blue text-length uppercase leading-tight">Joaquin Beltran</a>

  <ul class="flex flex-col space-y-2 pt-8 text-2xl font-extralight blue">
    <li class:active={$page.url.pathname === "/blog"}>
      <a href="/blog" class="hover:text-blue-400">Blog</a>
    </li>
    <li class:active={$page.url.pathname === "/about"}>
      <a href="/about" class="hover:text-blue-400">About</a>
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
  .text-length {
    max-width: 3ch;
  }
</style>
