import { Inter } from "next/font/google"
import "../globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { HeaderVariants } from "@/components/Header/Header"

const inter = Inter({ subsets: ["latin"] })

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "bg-slate-50"}>
        <Header variant={HeaderVariants.PRO} />
        <main className="flex justify-center">
          <section className="w-full max-w-screen-xl">{children}</section>
        </main>
        <Footer />
      </body>
    </html>
  )
}
