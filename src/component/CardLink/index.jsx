import { Link } from "react-router"

import "./index.scss"

export default function CardLink({ path, src, alt, label }) {
  return (
    <Link className="link" to={path}>
      <img className="link__picture" src={src} alt={alt} />
      <p className="link__label">{label}</p>
    </Link>
  )
}
