import { NavLink } from "react-router"

import Logo from "../../assets/logo/logo-terre-1.svg"
import "./index.scss"

export default function Header() {
  return (
    <header className="header-container">
      <img src={Logo} alt="" />
      <nav className="nav-header">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/a_propos" end>
          À propros
        </NavLink>
      </nav>
    </header>
  )
}
