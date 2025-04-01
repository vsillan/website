/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `sillanpaa.dev`,
    author: {
      name: `Ville Sillanpää`,
      summary: `I've worked in the software development industry for around ten years. Lately, I've been primarily focusing on consulting on complex web app, infrastructure, and data projects.`,
    },
    description: `This is a blog about software development and the website for my solo consulting business.`,
    siteUrl: `https://sillanpaa.dev`,
    social: {
      twitter: `sillanpaa_dev`,
      github: `vsillan`,
      linkedin: `villesillanpaa`,
    },
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
                author {
                  name
                  summary
                }
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                  author: site.siteMetadata.author.name,
                  categories: ["blog", "software development"],
                  language: "en",
                  copyright: `© ${new Date().getFullYear()} ${site.siteMetadata.author.name}`,
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "sillanpaa.dev blog RSS feed",
            description: "Blog post about software development and consulting",
            site_url: "https://sillanpaa.dev",
            image_url: "https://sillanpaa.dev/og-image.jpg",
            pubDate: new Date(),
            language: "en",
            copyright: `© ${new Date().getFullYear()} Ville Sillanpää`,
          },
        ],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Martel", "Ubuntu"],
        display: "swap",
      },
    },
  ],
}