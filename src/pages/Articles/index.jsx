import { useParams } from "react-router"
import { useData } from "../../hook.js"

import Footer from "../../container/Footer"
import Header from "../../container/Header"

import "./index.scss"
import ArticleSection from "../../component/ArticleSection/index.jsx"
import ArticleFigure from "../../component/ArticleFigure/index.jsx"

export default function Articles() {
  let params = useParams()
  const { data, error } = useData()
  if (error) return <div>Error loading data</div>
  if (!data) return <div>Loading...</div>
  const articleData = data.find((article) => article.id === params.id)

  return (
    <>
      {articleData && (
        <>
          <Header />
          <article className="article-container">
            <header className="header-article">
              <h1 className="header-article__title">{articleData.title}</h1>
              <p className="header-article__subtitle">{articleData.subtitle}</p>
            </header>
            <ArticleSection addClass="introduction">
              <ArticleFigure
                src={articleData.src}
                alt={articleData.alt}
                ref={articleData.ref}
                nasa={articleData.nasa}
              />
              <div className="paragraphe">
                <p className="paragraphe__content">
                  <span className="paragraphe__content__hook">
                    {articleData.hookParagraph1}
                  </span>
                  {articleData.paragraph1}
                </p>
              </div>
            </ArticleSection>
          </article>
          <Footer />
        </>
      )}
    </>
  )
}
