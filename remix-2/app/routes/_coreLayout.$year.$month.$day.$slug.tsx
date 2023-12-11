import { LoaderFunction, json } from "@remix-run/node"
import { MetaFunction, useLoaderData } from "@remix-run/react"
import { fetchContentByUUID } from "lib"
import JokeOfTheMoment from "~/components/JokeOfTheMoment"
import QuoteOfTheMoment from "~/components/QuoteOfTheMoment"

export default function ProHomepage() {
  const { params, story } = useLoaderData<typeof loader>()

  return (
    <section className="max-w-4xl mx-auto">
      <JokeOfTheMoment />
      <QuoteOfTheMoment />
      <h1 className="pb-6 text-3xl font-bold">{story.headline}</h1>
      <h2 className="pb-6 text-xl font-bold">
        You&apos;re looking at {params.year}, {params.month}, {params.day}, and{" "}
        {params.slug}
      </h2>
      {story?.primary_image && (
        <div className="flex justify-center pb-8">
          <img
            src={story.primary_image.base_image_url}
            className="w-full"
            width={1024}
            height={720}
          />
        </div>
      )}
      <article>
        {story.blocks.blocks?.map((block) => {
          return (
            <p className="pb-4" key={block.key}>
              {block.text}
            </p>
          )
        })}
      </article>
    </section>
  )
}

export const meta: MetaFunction = () => {
  return [{ title: "Story Page" }]
}

export const loader: LoaderFunction = async ({ params }) => {
  const story = await fetchContentByUUID(params.slug)
  return json({ params, story })
}
