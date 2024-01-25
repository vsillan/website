/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

const StaticImageContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    min-width: 50px;
    border-radius: 100%;
  }
`

const BioTextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const BioContainer = styled.div`
  display: flex;
  gap: var(--spacing-16);
  @media (max-width: 800px) {
    flex-direction: column;
    gap: var(--spacing-4);
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          description
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const description = data.site.siteMetadata?.description

  return (
    <BioContainer>
      <BioTextContainer>
        <p>{description}</p>
        <p>
          I'm <strong>{author.name}</strong> and {author?.summary || null}
        </p>
      </BioTextContainer>
      <StaticImageContainer>
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic2.jpeg"
          width={200}
          height={200}
          quality={100}
          alt="Profile picture"
        />
      </StaticImageContainer>
    </BioContainer>
  )
}

export default Bio
