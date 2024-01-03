<script lang="ts">
	import JokeOfTheMoment from '@/components/JokeOfTheMoment/JokeOfTheMoment.svelte';
	import QuoteOfTheMoment from '@/components/QuoteOfTheMoment/QuoteOfTheMoment.svelte';

	export let data;

	const { story, params, jokeJson, quoteJson } = data;
</script>

<title>Svelte - Story Page</title>

<section class="max-w-4xl mx-auto">
	<JokeOfTheMoment joke={jokeJson} />
	<QuoteOfTheMoment quotes={quoteJson} />
	<h1 class="pb-6 text-3xl font-bold">{story.headline}</h1>
	<h2 class="pb-6 text-xl font-bold">
		You&apos;re looking at {params.year}, {params.month}, {params.day}, and{' '}
		{params.id}
	</h2>
	{#if story?.primary_image}
		<div class="flex justify-center pb-8">
			<img
				src={story.primary_image.base_image_url}
				alt={''}
				class="w-full"
				width={1024}
				height={720}
			/>
		</div>
	{/if}
	<article>
		{#each story.blocks.blocks as block}
			<p class="pb-4">
				{block.text}
			</p>
		{/each}
	</article>
</section>
