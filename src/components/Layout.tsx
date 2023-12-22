import { NavBar } from "./NavBar"

type Props = {
  location: Location
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__ as any}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div>
      <NavBar location={location} />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Ville Sillanpää</footer>
      </div>
    </div>
  )
}

export default Layout
