import githubOutline from "@iconify/icons-teenyicons/github-outline"
import twitterOutline from "@iconify/icons-teenyicons/twitter-outline"
import linkedinOutline from "@iconify/icons-teenyicons/linkedin-outline"

import { Icon, IconifyIcon } from "@iconify/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Link } from "./Link"

import { css } from "@emotion/css"

const LinkWithIcon = ({
  link,
  description,
  icon,
}: {
  link: string
  description: string
  icon: IconifyIcon
}) => (
  <Link
    href={link}
    className={css`
      display: flex;
      gap: 4px;
      align-items: center;
    `}
  >
    <Icon icon={icon} height={20} />
    <span>{description}</span>
  </Link>
)

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
        justify-content: space-between;
        background-color: #0006;
      `}
    >
      <span>Sillanpaa Dev</span>
      <div
        className={css`
          display: flex;
          gap: 12px;
          padding: 12px;
        `}
      >
        <LinkWithIcon
          link={`https://github.com/${social.github}`}
          description="Github"
          icon={githubOutline}
        />
        <LinkWithIcon
          link={`https://linkedin.com/in/${social.linkedin}`}
          description="LinkedIn"
          icon={linkedinOutline}
        />
        <LinkWithIcon
          link={`https://twitter.com/${social.twitter}`}
          description="Twitter"
          icon={twitterOutline}
        />
      </div>
    </div>
  )
}
