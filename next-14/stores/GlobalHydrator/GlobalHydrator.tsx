"use client"

import { PropsWithoutRef } from "react"
import { useHydrateAtoms } from "jotai/utils"
import { PrimitiveAtom } from "jotai"

export default function GlobalHydrator({
  data,
}: PropsWithoutRef<{ data: [PrimitiveAtom<any>, any][] }>) {
  useHydrateAtoms(data)
  return ""
}
