"use client"

import { quoteAtom } from "@/stores/quote"
import { useAtom } from "jotai"

export default function QuoteOfTheMoment() {
  const [quote] = useAtom(quoteAtom)

  return (
    <span className="flex gap-2 p-2">
      <i className="contents">{quote?.content}</i> -
      <strong className="contents">{quote?.author}</strong>
    </span>
  )
}
