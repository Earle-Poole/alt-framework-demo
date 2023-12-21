<script lang="ts">
  // props passed from the load function
  export let title;

  console.log('title: ', $title)
</script>

<!-- <Header /> -->
Header!!!
<main class="flex justify-center">
  <section class="w-full max-w-screen-xl">
    <slot />
  </section>
</main>
Footer!!!
