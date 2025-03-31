import githubOutline from "@iconify/icons-teenyicons/github-outline"
import linkedinOutline from "@iconify/icons-teenyicons/linkedin-outline"
import rssOutline from "@iconify/icons-teenyicons/rss-outline"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { ExternalLink, InternalLink } from "./Link"
import { ThemeToggle } from "./ThemeToggle"
import styled from "@emotion/styled"

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1a2423;
  padding: var(--spacing-4);
`

const LinkContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

export const NavBar = (props: { location: Location }) => {
  const data = useStaticQuery(graphql`
    query NavBarQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata?.social

  return (
    <NavBarContainer>
      <LinkContainer>
        <InternalLink
          to="/"
          text="Index"
          isActive={props.location.pathname === "/"}
        />
        <InternalLink
          to="/hire-me"
          text="Hire me"
          isActive={props.location.pathname === "/hire-me/"}
        />
      </LinkContainer>
      <LinkContainer>
        <ThemeToggle />
        <ExternalLink to="/rss" text="RSS" icon={rssOutline} />
        <ExternalLink
          to={`https://github.com/${social.github}`}
          text="Github"
          icon={githubOutline}
        />
        <ExternalLink
          to={`https://linkedin.com/in/${social.linkedin}`}
          text="LinkedIn"
          icon={linkedinOutline}
        />
      </LinkContainer>
    </NavBarContainer>
  )
}
