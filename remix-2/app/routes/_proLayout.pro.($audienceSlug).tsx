import { formatAudienceSlug } from "@/lib/formatting";
import { LoaderFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import { MetaFunction, useLoaderData, useLocation } from "@remix-run/react";
import { fetchContentByUUID, fetchStreamContent } from "lib";
import { ContentByUUIDResponse } from "lib/lib.types";

export default function ProAudiencePage() {
  const { data, audienceSlug } = useLoaderData<typeof loader>();
  const location = useLocation();
  console.log("data in ProAudiencePage: ", data);
  if (audienceSlug) {
    return <h1>Viewing {formatAudienceSlug(audienceSlug)}</h1>;
  }

  const audiences = ["fintech-deals", "media-deals", "climate-deals"];

  return (
    <section>
      <h1>We don't have an audience so here's the Pro Homepage!</h1>
      <ul>
        {audiences.map((audience) => (
          <li>
            <a href={location.pathname + "/" + audience} className="text-blue-600 hover:cursor-pointer">
              {formatAudienceSlug(audience)}
            </a>
          </li>
        ))}
      </ul>
      <pre>
        {JSON.stringify(
          data.map((story) => story.headline),
          undefined,
          2
        )}
      </pre>
    </section>
  );
}

export const meta: MetaFunction = ({params}) => {
  return [{ title: params.audienceSlug ?  `Remix - Pro ${formatAudienceSlug(params.audienceSlug)} Homepage` :"Remix - Pro Audience Homepage"  }];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const streamContentResponse = await fetchStreamContent();

  const fetchedContent = await Promise.all<ContentByUUIDResponse>(
    streamContentResponse.results.map(async (str) => {
      return await fetchContentByUUID(str);
    })
  );

  return json({ data: fetchedContent, audienceSlug: params.audienceSlug });
}
