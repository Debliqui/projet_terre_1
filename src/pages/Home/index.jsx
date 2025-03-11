import Header from "../../component/Header"
import Footer from "../../component/Footer"

import "./index.scss"
import Banner from "../../component/Banner"

export default function Home() {
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
      </main>
      <Footer />
    </>
  )
}
