"use client"

import { jokeAtom } from "@/stores"
import { useAtom } from "jotai"

export default function JokeOfTheMoment() {
  const [joke] = useAtom(jokeAtom)
  return (
    <span className="flex gap-2 p-2">
      <strong className="contents">
        Here&apos;s your joke of the moment:{" "}
      </strong>
      {joke}
    </span>
  )
}
