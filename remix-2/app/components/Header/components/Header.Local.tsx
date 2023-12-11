import Logo from "@/app/components/Logo"
import NavLinks from "@/app/components/NavLinks"
import UserAccount from "@/app/components/UserAccount"

export default function LocalHeader() {
  return (
    <header className="flex justify-center">
      <nav className="flex flex-1 h-20 items-center px-4 w-full max-w-screen-xl">
        <Logo />
        <NavLinks />
        <UserAccount />
      </nav>
    </header>
  )
}
