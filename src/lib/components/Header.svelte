<script>
  import { page } from "$app/stores";
</script>

<header>
  <div class="pt-10">
    <div class="text-center text-4xl font-extralight blue">Joaquin Beltran</div>
    <ul class="flex justify-center space-x-4 pt-8 text-2xl font-extralight blue">
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
  </div>
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
