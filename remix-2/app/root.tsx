import { LinksFunction } from "@remix-run/node"

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useRouteError,
} from "@remix-run/react"
import stylesheet from "app/tailwind.css"

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
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
