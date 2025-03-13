import Header from "../../container/Header"
import Footer from "../../container/Footer"
import Banner from "../../component/Banner"
import CardLink from "../../component/CardLink"

import "./index.scss"

import ImgSpace from "../../assets/grid/as4-01-410~small.webp"
import ImgCloud from "../../assets/grid/GSFC_20171208_Archive_e000344~small.webp"
import ImgCenter from "../../assets/grid/la_terre_vue_du_centre.webp"
import ImgMountain from "../../assets/grid/en_haut_des_montagnes.webp"
import ImgVolcano from "../../assets/grid/dans_les_volcans.webp"
import ImgDepth from "../../assets/grid/dans_les_profondeurs.webp"

export default function Home() {
  const navList = [
    {
      path: "/space",
      label: "L'espace",
      src: ImgSpace,
      alt: "Terre vue de l'espace",
    },
    {
      path: "/cloud",
      label: "Dans les aires",
      src: ImgCloud,
      alt: "Nuages denses et tourbillonnants au-dessus de la Terre",
    },
    {
      path: "/center",
      label: "Centre de la terre",
      src: ImgCenter,
      alt: "Schema du noyaux terrestre",
    },
    {
      path: "/montain",
      label: "Nos Montagnes",
      src: ImgMountain,
      alt: "Châine de montganes",
    },
    {
      path: "/volcano",
      label: "Nos Volcans",
      src: ImgVolcano,
      alt: "Éruption volcanique",
    },
    {
      path: "/depth",
      label: "Fond marin",
      src: ImgDepth,
      alt: "Fond marin montrant des coraux ",
    },
  ]
  return (
    <>
      <Header />
      <main>
        <Banner>
          <div className="banner__content">
            <h2 className="banner__content__title">Bienvenue sur Terre 1</h2>
            <p className="banner__content__description">
              Vous trouverez ici toutes les informations nécessaires pour vous
              intégrer dans la société terrienne
            </p>
          </div>
        </Banner>
        <section className="grid">
          <h2 className="grid__title">Venez explorer notre planète !</h2>
          <div className="grid__card">
            {navList.map((item, index) => (
              <CardLink
                key={index}
                path={item.path}
                label={item.label}
                src={item.src}
                alt={item.alt}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
