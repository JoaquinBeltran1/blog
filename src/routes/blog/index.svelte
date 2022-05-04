<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch("/api/posts.json");
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts,
      },
    };
  };
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog | Joaquin Beltran</title>
</svelte:head>

<ul class="space-y-3 pt-3 table m-auto">
  {#each posts as post}
    <li class="px-8">
      <div class="flex flex-col justify-between items-baseline">
        <h2 class="text-2xl blue hover:text-blue-400">
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        <p class="light-blue italic">{post.meta.date}</p>
      </div>
    </li>
  {/each}
</ul>

<style>
  .blue {
    color: rgb(52, 78, 162);
  }
  .light-blue {
    color: rgb(129, 144, 199);
  }
</style>
