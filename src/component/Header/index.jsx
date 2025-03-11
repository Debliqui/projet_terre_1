import { NavLink } from "react-router"

import Logo from "../../assets/logo/logo-terre-1.svg"
import "./index.scss"

export default function Header() {
  return (
    <header>
      <h1>
        <img src={Logo} alt="" />
      </h1>
      <nav className="nav-header">
        <div className="nav-header__menu">
          <NavLink to="/" end>
            Exemple
          </NavLink>
          <NavLink to="/" end>
            Exemple
          </NavLink>
          <NavLink to="/" end>
            Exemple
          </NavLink>
          <NavLink to="/" end>
            Exemple
          </NavLink>
        </div>
        <div className="nav-header__primary">
          <NavLink to="/" end>
            Accueil
          </NavLink>
          <NavLink to="/a_propos" end>
            À propros
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
