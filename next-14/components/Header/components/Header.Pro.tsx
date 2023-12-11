import ProLogo from "@/components/Logo/ProLogo"
import NavLinks from "@/components/NavLinks"
import UserAccount from "@/components/UserAccount"

export default function ProHeader() {
  return (
    <header className="flex justify-center">
      <nav className="flex flex-1 h-20 items-center px-4 w-full max-w-screen-xl">
        <ProLogo />
        <NavLinks />
        <UserAccount />
      </nav>
    </header>
  )
}
