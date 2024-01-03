import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Next - Pro Homepage",
}

export default function ProHomepage() {
  return (
    <div className="flex flex-col py-16 gap-4">
      <h1 className="text-4xl">Here&apos;s what matters in your industry.</h1>
      <h2 className="text-lg">
        Unlock exclusive stories, breaking news and trend analysis with Axios
        Pro.
      </h2>
    </div>
  )
}
