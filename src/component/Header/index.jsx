import { NavLink } from "react-router"

import Logo from "../../assets/logo/logo_terre1v9.svg"
import "./index.scss"

export default function Header() {
  return (
    <header>
      <h1>
        <img src={Logo} alt="" />
      </h1>
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
