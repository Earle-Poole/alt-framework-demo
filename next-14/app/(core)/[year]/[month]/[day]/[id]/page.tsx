import JokeOfTheMoment from "@/components/JokeOfTheMoment"
import QuoteOfTheMoment from "@/components/QuoteOfTheMoment"
import { fetchContentByUUID } from "@/lib"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Story Page",
}

interface StoryPageProps {
  params: { id: string; year: string; month: string; day: string }
}

export default async function StoryPage({ params }: StoryPageProps) {
  const story = await fetchContentByUUID(params.id)

  return (
    <section className="max-w-4xl mx-auto">
      <JokeOfTheMoment />
      <QuoteOfTheMoment />
      <h1 className="pb-6 text-3xl font-bold">{story.headline}</h1>
      <h2 className="pb-6 text-xl font-bold">
        You&apos;re looking at {params.year}, {params.month}, {params.day}, and{" "}
        {params.id}
      </h2>
      {story?.primary_image && (
        <div className="flex justify-center pb-8">
          <Image
            alt={story.headline}
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
