import { Link } from "@remix-run/react"
import Logo from "../Logo"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-4 bg-slate-50">
      <div className="flex w-full max-w-screen-xl py-6 border-b">
        <section className="flex-1">
          <h1 className="text-4xl">News worthy of your time.</h1>
          <Link
            className="text-lg text-blue-600 cursor-pointer hover:underline"
            to={"#"}
          >
            Download the app &#10230;
          </Link>
        </section>
        <section className="flex flex-1 text-sm">
          <nav className="flex-1">
            <h2 className="text-3xl">About</h2>
            <ul className="flex flex-col flex-1">
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a>About Axios</a>
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a>Advertise with us</a>
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a>Careers</a>
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a>Events</a>
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                <a>Axios on HBO</a>
              </li>
            </ul>
          </nav>
          <nav className="flex-1">
            <h2 className="text-3xl">Subscribe</h2>
            <ul className="flex flex-col flex-1">
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                Axios newsletters
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                Axios Pro
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                Axios app
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                Axios podcasts
              </li>
              <li className="hover:underline hover:text-blue-600 cursor-pointer">
                Courses
              </li>
            </ul>
          </nav>
        </section>
      </div>
      <div className="w-full max-w-screen-xl pt-4">
        <Logo />
      </div>
    </footer>
  )
}

export default Footer
