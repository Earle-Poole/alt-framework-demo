import { fetchContentByUUID } from '@/lib/utils';

export const load = async ({ params }) => {
	const story = await fetchContentByUUID(params.id);

	return { story, params: { ...params } };
};
