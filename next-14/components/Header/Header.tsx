import CoreHeader from "./components/Header.Core"
import LocalHeader from "./components/Header.Local"
import ProHeader from "./components/Header.Pro"

interface HeaderProps {
  variant?: HeaderVariants
}

const Header = (props: HeaderProps) => {
  const { variant, ...propsWithoutVariant } = props
  switch (props.variant) {
    case HeaderVariants.PRO:
      return <ProHeader {...propsWithoutVariant} />
    case HeaderVariants.LOCAL:
      return <LocalHeader {...propsWithoutVariant} />
    default:
      return <CoreHeader {...propsWithoutVariant} />
  }
}

export default Header

export enum HeaderVariants {
  CORE = "CORE",
  PRO = "PRO",
  LOCAL = "LOCAL",
}
