import type { ContentByUUIDResponse } from '@/lib/lib.types';
import { fetchContentByUUID, fetchStreamContent } from '@/lib/utils';

export const load = async () => {
	const streamContentResponse = await fetchStreamContent();

	const fetchedContent = await Promise.all<ContentByUUIDResponse>(
		streamContentResponse.results.map(async (str) => {
			return await fetchContentByUUID(str);
		})
	);

	return {
		title: 'Hello!',
		stories: fetchedContent
	};
};
