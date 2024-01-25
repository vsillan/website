import * as React from "react"
import { graphql } from "gatsby"
import mixpanel from "mixpanel-browser"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { InternalLink } from "../components/Link"
import styled from "@emotion/styled"

const BlogPostsDividerText = styled.span`
  color: var(--color-text-dark);
  display: block;
  padding-top: var(--spacing-6);
`

const BlogPostsDivider = styled.hr`
  background-color: var(--color-text-dark);
  opacity: 0.2;
`

type Props = {
  data: Queries.IndexPageQuery
  location: Location
}

const Index: React.FC<Props> = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  mixpanel.init("53e4520485c270bac10c04a9c6d050a0", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  })

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <Bio />
      </Layout>
    )
  }

  return (
    <Layout location={location}>
      <h1>Welcome</h1>
      <Bio />
      <BlogPostsDividerText>Blog posts</BlogPostsDividerText>
      <BlogPostsDivider />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          if (post === null) {
            return null
          }

          const title = post.frontmatter?.title || post.fields?.slug

          return (
            <li key={post.fields?.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <InternalLink
                      to={post.fields?.slug || ""}
                      text={title ?? ""}
                    />
                  </h2>
                  <small>{post.frontmatter?.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        post.frontmatter?.description || post.excerpt || "",
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Index

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Software development blog" />

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
