export default function Banner({ children, src }) {
  return (
    <div style={{ backgroundImage: `url(${src})` }} className="banner">
      {children}
    </div>
  )
}
