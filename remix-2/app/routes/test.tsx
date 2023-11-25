import { MetaFunction } from "@remix-run/react"

export default function Test() {
  return <h1>It'sa me, test!</h1>
}

export const meta: MetaFunction = () => {
  return [{ title: "Test" }]
}
