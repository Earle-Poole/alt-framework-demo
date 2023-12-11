import { PropsWithoutRef } from "react"
import { useHydrateAtoms } from "jotai/utils"

export default function GlobalHydrator({
  data,
}: PropsWithoutRef<{ data: [any, any][] }>) {
  useHydrateAtoms(data)
  return null
}
