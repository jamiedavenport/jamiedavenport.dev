/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Fact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

const FactLink = styled(Fact)`
  text-decoration: none;
  box-shadow: none;
`

const FactImg = styled.img`
  width: 30px;
  margin: 0;
`

const FactText = styled.span`
  margin-left: 10px;
`

const Social = styled.div`
  display: flex;
  margin-top: 10px;
`

const SocialIcon = styled(FactImg)`
  margin-right: 10px;
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1),
                marginBottom: 0,
                minWidth: 100,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div>
              <Fact>
                <FactImg src="/laptop.svg" alt="Location" />
                <FactText>Software Engineer</FactText>
              </Fact>
              <Fact>
                <FactImg src="/pin.svg" alt="Location" />
                <FactText>Manchester, UK</FactText>
              </Fact>
              <Social>
                <FactLink
                  as="a"
                  href={`https://twitter.com/${social.twitter}`}
                  target="_blank"
                >
                  <SocialIcon src="/twitter.svg" alt="Location" />
                </FactLink>
                <FactLink
                  as="a"
                  href={`https://github.com/${social.github}`}
                  target="_blank"
                >
                  <SocialIcon src="/github.svg" alt="Location" />
                </FactLink>
                <FactLink
                  as="a"
                  href={`https://www.linkedin.com/in/${social.linkedin}`}
                  target="_blank"
                >
                  <SocialIcon src="/linkedin.svg" alt="Location" />
                </FactLink>
                <FactLink as="a" href={`/rss.xml`} target="_blank">
                  <SocialIcon src="/rss.svg" alt="Location" />
                </FactLink>
              </Social>
            </div>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pin: file(absolutePath: { regex: "/pin.svg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
