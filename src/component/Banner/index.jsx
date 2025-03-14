export default function Banner({ children, src }) {
  return (
    <section style={{ backgroundImage: `url(${src})` }} className="banner">
      {children}
    </section>
  )
}
