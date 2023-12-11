"use client"
import { atom } from "jotai"

interface Quote {
  _id: string
  content: string
  author: string
  tags: string[]
  authorSlug: string
  length: number
  dateAdded: string
  dateModified: string
}

export const quoteAtom = atom<Quote | null>(null)
