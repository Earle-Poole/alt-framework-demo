import { MetaFunction, Outlet } from "@remix-run/react"
import Footer from "~/components/Footer"
import Header from "~/components/Header"

export default function CoreLayout() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <section className="w-full max-w-screen-xl">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  )
}

export const meta: MetaFunction = () => {
  return [{ title: "Remix - National Page" }]
}
