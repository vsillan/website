import { Link } from "gatsby"

type Props = {
  title: string
  location: Location
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__ as any}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Ville Sillanpää</footer>
    </div>
  )
}

export default Layout
