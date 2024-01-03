<script>
	// props passed from the load function
	export let data;

	console.log('data: ', data);
</script>

<title>{data.title}</title>

<p>Here's some stories and junk</p>
{#each data.stories as story}
	{'{'}
	{@const storyLink = `/${new Date(story.first_published).getFullYear()}/${
		new Date(story.first_published).getMonth() + 1
	}/${new Date(story.first_published).getDate()}/${story.id}`}
	<div class="px-4 flex flex-col">
		<span>Title: {story.headline}</span>
		<span>Description: {story.og_description}</span>
		<pre class="flex">Link: <a class="text-blue-600 hover:underline cursor-pointer" href={storyLink}
				>{JSON.stringify(storyLink)}</a
			>
  		</pre>
	</div>
	{'}'}<br />
{/each}
