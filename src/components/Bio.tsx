/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
          description
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const description = data.site.siteMetadata?.description

  return (
    <div
      className={css`
        display: flex;
        gap: var(--spacing-16);
        @media (max-width: 800px) {
          flex-direction: column;
          gap: var(--spacing-4);
        }
      `}
    >
      <div
        className={css`
          display: flex;
          flex: 1;
          flex-direction: column;
        `}
      >
        <p>{description}</p>
        <p>
          I'm <strong>{author.name}</strong> and {author?.summary || null}
        </p>
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
        `}
      >
        <StaticImage
          className={css`
            min-width: 50px;
            border-radius: 100%;
          `}
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic2.jpeg"
          width={200}
          height={200}
          quality={100}
          alt="Profile picture"
        />
      </div>
    </div>
  )
}

export default Bio
