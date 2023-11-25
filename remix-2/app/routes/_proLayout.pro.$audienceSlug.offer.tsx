import { LoaderFunction, json } from "@remix-run/node"
import { MetaFunction, useLoaderData } from "@remix-run/react"

export default function ProOfferPage() {
  const data = useLoaderData<typeof loader>()
  console.log("data in offer page: ", data)
  return <h1>Viewing {data.audienceSlug} offer page</h1>
}

export const meta: MetaFunction = ({ params }) => {
  console.log("params in pro offer meta: ", params)
  return [{ title: "Pro Offer Page" }]
}

export const loader: LoaderFunction = async ({ params }) => {
  return json(params)
}
