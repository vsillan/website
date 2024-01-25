import styled from "@emotion/styled"
import { NavBar } from "./NavBar"

type Props = {
  location: Location
  children: React.ReactNode
}

const ContentWrapper = styled.div`
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: 0 var(--spacing-5);
`

const Layout: React.FC<Props> = ({ location, children }) => {
  return (
    <div>
      <NavBar location={location} />
      <ContentWrapper>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Ville Sillanpää</footer>
      </ContentWrapper>
    </div>
  )
}

export default Layout
