import { LoaderFunction, LoaderFunctionArgs, json } from "@remix-run/node"
import { MetaFunction, useLoaderData } from "@remix-run/react"
import { fetchContentByUUID, fetchStreamContent } from "lib"
import { ContentByUUIDResponse } from "lib/lib.types"

export default function ProAudiencePage() {
  const { data, audienceSlug } = useLoaderData<typeof loader>()
  console.log("data in ProAudiencePage: ", data)
  if (audienceSlug) {
    return <h1>Viewing {audienceSlug}</h1>
  }

  return (
    <section>
      <h1>Here's the Pro Homepage!</h1>
      <pre>
        {JSON.stringify(
          data.map((story) => story.headline),
          undefined,
          2
        )}
      </pre>
    </section>
  )
}

export const meta: MetaFunction = () => {
  return [{ title: "Pro Audience Page" }]
}

export async function loader({ params }: LoaderFunctionArgs) {
  const streamContentResponse = await fetchStreamContent()

  const fetchedContent = await Promise.all<ContentByUUIDResponse>(
    streamContentResponse.results.map(async (str) => {
      return await fetchContentByUUID(str)
    })
  )

  return json({ data: fetchedContent, audienceSlug: params.audienceSlug })
}
