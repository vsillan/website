import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "@emotion/styled"

const RssContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-8) 0;
`

const RssTitle = styled.h1`
  margin-bottom: var(--spacing-8);
`

const RssSection = styled.section`
  margin-bottom: var(--spacing-8);
`

const RssLink = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const RssPage = ({ location }: { location: Location }) => {
  return (
    <Layout location={location}>
      <RssContainer>
        <RssTitle>Stay Updated with my Software Development Insights</RssTitle>

        <RssSection>
          <h2>Feed URL</h2>
          <p>
            The RSS feed URL is:{" "}
            <RssLink href="/rss.xml">https://sillanpaa.dev/rss.xml</RssLink>
          </p>
        </RssSection>

        <RssSection>
          <h2>What is RSS?</h2>
          <p>
            RSS (Really Simple Syndication) is a way to stay updated with your
            favorite websites. Instead of visiting each site individually, you
            can use an RSS reader to get notified when new content is published.
          </p>
        </RssSection>

        <RssSection>
          <h2>How to Subscribe</h2>
          <p>You can subscribe to my blog's RSS feed in several ways:</p>
          <ol>
            <li>
              <strong>Using a Web Browser:</strong> Click the RSS icon in your
              browser's address bar or use the{" "}
              <RssLink href="/rss.xml">direct RSS feed link</RssLink>.
            </li>
            <li>
              <strong>Using an RSS Reader:</strong> Copy the feed URL (
              {`https://sillanpaa.dev/rss.xml`}) and add it to your preferred
              RSS reader. Some popular options include:
              <ul>
                <li>
                  <RssLink href="https://feedly.com">Feedly</RssLink>
                </li>
                <li>
                  <RssLink href="https://netnewswire.com">NetNewsWire</RssLink>{" "}
                  (for Mac)
                </li>
                <li>
                  <RssLink href="https://www.inoreader.com">Inoreader</RssLink>
                </li>
              </ul>
            </li>
          </ol>
        </RssSection>
      </RssContainer>
    </Layout>
  )
}

export const Head = () => <Seo title="RSS Feed" />

export default RssPage
