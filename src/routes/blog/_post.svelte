<script>
  export let title;
  export let date;
</script>

<h1 class="text-red-500 text-4xl">{title}</h1>

<p>Published: {date}</p>

<slot />
