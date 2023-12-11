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
import stylesheet from "app/tailwind.css"
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
        <body>
          <Outlet />
          <Scripts />
          <LiveReload />
          {/* Connects the app to the Remix asset server, and enables hot reload */}
        </body>
      </html>
    </Provider>
  )
}

export const loader = async () => {
  const jokeResponse = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
  const jokeJson = await jokeResponse.json()

  const quoteResponse = await fetch("https://api.quotable.io/quotes/random", {
    headers: { Accept: "application/json" },
  })

  const quoteJson = await quoteResponse.json()

  return json({ jokeJson, quoteJson })
}

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico", type: "image/png" },
  { rel: "stylesheet", href: stylesheet },
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
      <body>
        This looks like an error
        <Scripts />
      </body>
    </html>
  )
}
