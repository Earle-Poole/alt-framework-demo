import { json } from "@remix-run/node"
import { MetaFunction, useLoaderData } from "@remix-run/react"
import { fetchContentByUUID, fetchStreamContent } from "lib"
import { ContentByUUIDResponse } from "lib/lib.types"

export default function Home() {
  const { data } = useLoaderData<typeof loader>()
  return (
    <>
      <p>Here's some stories and junk</p>
      {data.map((story) => {
        const storyPublishedDate = new Date(story.first_published)
        const storyLink = `/${storyPublishedDate.getFullYear()}/${
          storyPublishedDate.getMonth() + 1
        }/${storyPublishedDate.getDate()}/${story.id}`
        return (
          <div key={story.id}>
            {"{"}
            <div className="px-4 flex flex-col">
              <span>Title: {story.headline}</span>
              <span>Description: {story.og_description}</span>
              <pre>
                Link:{" "}
                <a
                  className="text-blue-600 hover:underline cursor-pointer"
                  href={storyLink}
                >
                  {JSON.stringify(storyLink)}
                </a>
              </pre>
            </div>
            {"}"}
          </div>
        )
      })}
    </>
  )
}

export async function headers() {
  return {
    "Cache-Control": "public, max-age=60, s-maxage=60",
  }
}

export async function loader() {
  const streamContentResponse = await fetchStreamContent()

  const fetchedContent = await Promise.all<ContentByUUIDResponse>(
    streamContentResponse.results.map(async (str) => {
      return await fetchContentByUUID(str)
    })
  )

  return json({ data: fetchedContent })
}
