<script lang="ts">
	import type { Quote } from '@/routes/+layout';

	export let quotes: Quote[];
</script>

{#each quotes as quote}
	<span class="flex gap-2 p-2">
		<i class="contents">{quote?.content}</i> -
		<strong class="contents">{quote?.author}</strong>
	</span>
{/each}
