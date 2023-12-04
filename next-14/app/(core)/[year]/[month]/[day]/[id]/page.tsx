import { fetchContentByUUID } from "@/lib"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Story Page",
}

export default async function ProHomepage({
  params,
}: {
  params: { id: string; year: string; month: string; day: string }
}) {
  const story = await fetchContentByUUID(params.id)
  return (
    <section>
      <h1 className="pb-6 text-3xl font-bold">{story.headline}</h1>
      <h2 className="pb-6 text-xl font-bold">
        You&apos;re looking at {params.year}, {params.month}, {params.day}, and{" "}
        {params.id}
      </h2>
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
