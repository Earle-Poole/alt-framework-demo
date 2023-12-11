import { jokeAtom } from "@/stores"
import GlobalHydrator from "@/stores/GlobalHydrator"
import { quoteAtom } from "@/stores/quote"
import { Provider } from "jotai"
import { Metadata } from "next"
import React, { FC, PropsWithChildren } from "react"

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  // The fetches that occur here only happen on the server at build time
  const jokeResponse = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
    next: { revalidate: 10 /* seconds */ }, // The amount of time until cache is invalidated
  })
  const jokeJson = await jokeResponse.json()

  const quoteResponse = await fetch("https://api.quotable.io/quotes/random", {
    headers: { Accept: "application/json" },
    next: { revalidate: 30 },
  })

  const quoteJson = await quoteResponse.json()

  // We can use the data from any fetches here in the global RootLayout to hydrate
  // our Jotai stores before React has mounted and rendered the page.

  return (
    <Provider>
      <GlobalHydrator
        data={[
          [jokeAtom, jokeJson.joke],
          [quoteAtom, quoteJson[0]],
        ]}
      />
      {children}
    </Provider>
  )
}

export default RootLayout

export const metadata: Metadata = {
  description: "Axios Media",
  title: "Axios Media",
}
