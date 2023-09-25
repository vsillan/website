import githubOutline from "@iconify/icons-teenyicons/github-outline"
import linkedinOutline from "@iconify/icons-teenyicons/linkedin-outline"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { css } from "@emotion/css"
import { ExternalLink, InternalLink } from "./Link"

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
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        background-color: #0006;
        padding: 0 var(--spacing-4);
      `}
    >
      <div
        className={css`
          display: flex;
          gap: 20px;
          align-items: center;
        `}
      >
        {/* <h1>sillanpaa.dev</h1> */}
        <div
          className={css`
            display: flex;
            gap: 12px;
          `}
        >
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
        </div>
      </div>
      <div
        className={css`
          display: flex;
          gap: 12px;
          padding: 12px;
        `}
      >
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
        {/* <ExternalLink
          link={`https://twitter.com/${social.twitter}`}
          description="Twitter"
          icon={twitterOutline}
        /> */}
      </div>
    </div>
  )
}
