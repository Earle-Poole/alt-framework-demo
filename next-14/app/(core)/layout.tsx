import "../globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Header />
        <main className="flex justify-center">
          <section className="w-full max-w-screen-xl">{children}</section>
        </main>
        <Footer />
      </body>
    </html>
  )
}
