import "./index.scss"

export default function ArticleSection({ children, addClass }) {
  return <section className={`article-section ${addClass}`}>{children}</section>
}
