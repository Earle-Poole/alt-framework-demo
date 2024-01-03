import { MetaFunction, Outlet } from "@remix-run/react"
import Footer from "~/components/Footer"
import Header from "~/components/Header"
import { HeaderVariants } from "~/components/Header/Header"

export default function LocalLayout() {
  return (
    <>
      <Header variant={HeaderVariants.LOCAL}/>
      <main className="flex justify-center">
        <section className="w-full max-w-screen-xl">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  )
}
