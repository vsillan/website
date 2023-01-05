/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      {author?.name && (
        <div style={{ flex: 1, flexColumn: 1 }}>
          <p>
            Hello, I am <strong>{author.name}</strong>
          </p>
          <p>{author?.summary || null}</p>
        </div>
      )}
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic2.jpeg"
        width={200}
        height={200}
        quality={100}
        alt="Profile picture"
      />
    </div>
  )
}

export default Bio
