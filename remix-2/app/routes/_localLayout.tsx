import { MetaFunction, Outlet } from "@remix-run/react"
import Footer from "~/components/Footer"
import Header from "~/components/Header"

export default function LocalLayout() {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  )
}

export const meta: MetaFunction = () => {
  return [{ title: "Landing" }]
}
