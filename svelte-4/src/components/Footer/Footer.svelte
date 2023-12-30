<script>
	import Logo from '../Logo/Logo.svelte';
</script>

<footer class="flex flex-col items-center p-4 bg-slate-50">
	<div class="flex w-full max-w-screen-xl py-6 border-b">
		<section class="flex-1">
			<h1 class="text-4xl">News worthy of your time.</h1>
			<a class="text-lg text-blue-600 cursor-pointer hover:underline" href={'#'}>
				Download the app &#10230;
			</a>
		</section>
		<section class="flex flex-1 text-sm">
			<nav class="flex-1">
				<h2 class="text-3xl">About</h2>
				<ul class="flex flex-col flex-1">
					<li class="hover:underline hover:text-blue-600 cursor-pointer">
						<a href="/">About Axios</a>
					</li>
					<li class="hover:underline hover:text-blue-600 cursor-pointer">
						<a href="/">Advertise with us</a>
					</li>
					<li class="hover:underline hover:text-blue-600 cursor-pointer">
						<a href="/">Careers</a>
					</li>
					<li class="hover:underline hover:text-blue-600 cursor-pointer">
						<a href="/">Events</a>
					</li>
					<li class="hover:underline hover:text-blue-600 cursor-pointer">
						<a href="/">Axios on HBO</a>
					</li>
				</ul>
			</nav>
			<nav class="flex-1">
				<h2 class="text-3xl">Subscribe</h2>
				<ul class="flex flex-col flex-1">
					<li class="hover:underline hover:text-blue-600 cursor-pointer">Axios newsletters</li>
					<li class="hover:underline hover:text-blue-600 cursor-pointer">Axios Pro</li>
					<li class="hover:underline hover:text-blue-600 cursor-pointer">Axios app</li>
					<li class="hover:underline hover:text-blue-600 cursor-pointer">Axios podcasts</li>
					<li class="hover:underline hover:text-blue-600 cursor-pointer">Courses</li>
				</ul>
			</nav>
		</section>
	</div>
	<div class="w-full max-w-screen-xl pt-4">
		<Logo />
	</div>
</footer>
