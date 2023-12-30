<script lang="ts">
	import type { Joke } from '@/routes/+layout';

	export let joke: Joke;
</script>

<span class="flex gap-2 p-2">
	<strong class="contents">
		Here&apos;s your joke of the moment:{' '}
	</strong>
	{joke.joke}
</span>
