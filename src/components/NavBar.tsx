import githubOutline from "@iconify/icons-teenyicons/github-outline"
import twitterOutline from "@iconify/icons-teenyicons/twitter-outline"
import linkedinOutline from "@iconify/icons-teenyicons/linkedin-outline"

import { Icon } from "@iconify/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Link } from "./Link"

import { css } from "@emotion/css"

export const NavBar = () => {
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
        border-bottom: 2px solid black;
        justify-content: space-between;
      `}
    >
      <span>Sillanpaa Dev</span>
      <div>
        <Link href={`https://github.com/${social.github}`}>
          <Icon icon={githubOutline} />
        </Link>
        <Link href={`https://linkedin.com/in/${social.linkedin}`}>
          <Icon icon={linkedinOutline} />
        </Link>
        <Link href={`https://twitter.com/${social.twitter}`}>
          <Icon icon={twitterOutline} />
        </Link>
      </div>
    </div>
  )
}
