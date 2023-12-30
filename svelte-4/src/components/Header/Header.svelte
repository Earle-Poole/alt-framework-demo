<script>
	import NavLinks from '../NavLinks/NavLinks.svelte';
	import Logo from '../Logo/Logo.svelte';
</script>

<header class="flex justify-center">
	<nav class="flex flex-1 h-20 items-center px-4 w-full max-w-screen-xl">
		<Logo />
		<NavLinks />
		<section>
			<a href="/">Log In</a>
		</section>
	</nav>
</header>
