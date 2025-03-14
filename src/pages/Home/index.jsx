import Header from "../../container/Header"
import Footer from "../../container/Footer"
import Banner from "../../component/Banner"
import CardLink from "../../component/CardLink"

import { useData } from "../../hook.js"

import "./index.scss"
import BgBanner from "../../assets/a-sky-view-of-earth-from-suomi-npp_16611703184_o~medium.webp"

export default function Home() {
  const { data, error } = useData()
  if (error) return <div>Error loading data</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      <Header />
      <main>
        <Banner src={BgBanner}>
          <div className="banner__content">
            <h1 className="banner__content__title">Bienvenue sur Terre 1</h1>
            <p className="banner__content__description">
              Vous trouverez ici toutes les informations nécessaires pour vous
              intégrer dans la société terrienne
            </p>
          </div>
        </Banner>
        <section className="grid">
          <h2 className="grid__title">Venez explorer notre planète !</h2>
          <div className="grid__card">
            {data?.map((item, index) => (
              <CardLink
                key={index}
                path={`/article/${item.id}`}
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
