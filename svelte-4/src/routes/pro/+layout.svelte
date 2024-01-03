<script>
	import Footer from '@/components/Footer/Footer.svelte';
	import Header from '@/components/Header/Header.svelte';
</script>

<Header />
<main class="flex justify-center">
	<section class="w-full max-w-screen-xl">
		<slot />
	</section>
</main>
<Footer />
