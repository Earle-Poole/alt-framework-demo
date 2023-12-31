import { cache } from "@/lib"
import { jokeAtom } from "@/stores"
import GlobalHydrator from "@/stores/GlobalHydrator"
import { quoteAtom } from "@/stores/quote"
import { LinksFunction, json } from "@remix-run/node"

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
  useRouteError,
} from "@remix-run/react"
import "app/tailwind.css"
import { Provider } from "jotai"

export default function App() {
  const { jokeJson, quoteJson } = useLoaderData<typeof loader>()

  return (
    <Provider>
      <GlobalHydrator
        data={[
          [jokeAtom, jokeJson.joke],
          [quoteAtom, quoteJson[0]],
        ]}
      />
      <html>
        <head>
          <Meta />
          <Links />
        </head>
        <body className="bg-slate-50">
          <Outlet />
          <Scripts />
          {/* Connects the app to the Remix asset server, and enables hot reload */}
          <LiveReload />
        </body>
      </html>
    </Provider>
  )
}

export const loader = async () => {
  let jokeJson, quoteJson
  if (cache.has("jokeJson")) {
    jokeJson = cache.get("jokeJson")
  } else {
    const jokeResponse = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
    jokeJson = await jokeResponse.json()
    cache.set("jokeJson", jokeJson, 5)
  }

  if (cache.has("quoteJson")) {
    quoteJson = cache.get("quoteJson")
  } else {
    const quoteResponse = await fetch("https://api.quotable.io/quotes/random", {
      headers: { Accept: "application/json" },
    })

    quoteJson = await quoteResponse.json()
    cache.set("quoteJson", quoteJson, 30)
  }

  return json({ jokeJson, quoteJson })
}

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico", type: "image/png" },
]

export function ErrorBoundary() {
  const error = useRouteError()
  console.error(error)
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-50">
        This looks like an error
        <Scripts />
      </body>
    </html>
  )
}
