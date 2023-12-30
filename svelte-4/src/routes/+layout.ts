import type { LayoutLoad } from './$types.js';

export interface RootLayoutLoader extends LayoutLoad {}

export interface Joke {
	id: string;
	joke: string;
	status: number;
}

export interface Quote {
	_id: string;
	content: string;
	author: string;
	tags: string[];
	authorSlug: string;
	length: number;
	dateAdded: string;
	dateModified: string;
}

export const load: RootLayoutLoader = async () => {
	const jokeResponse = await fetch('https://icanhazdadjoke.com/', {
		headers: { Accept: 'application/json' }
	});
	const jokeJson = (await jokeResponse.json()) as Joke;

	const quoteResponse = await fetch('https://api.quotable.io/quotes/random', {
		headers: { Accept: 'application/json' }
	});
	const quoteJson = (await quoteResponse.json()) as Quote[];

	return {
		jokeJson,
		quoteJson
	};
};

export const ssr = false;
