"use client"
// The above "use client" directive is necessary so that the atom function below is not run on the server.
import { atom } from "jotai"

export const jokeAtom = atom<string>("")

// export default function useJokeStore() {}
