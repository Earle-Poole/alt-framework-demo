import Logo from "../Logo"
import NavLinks from "../NavLinks"
import UserAccount from "../UserAccount"

const Header = () => {
  return (
    <>
      <header className="flex justify-center">
        <nav className="flex flex-1 h-20 items-center px-4 w-full max-w-screen-xl">
          <Logo />
          <NavLinks />
          <UserAccount />
        </nav>
      </header>
    </>
  )
}

export default Header
