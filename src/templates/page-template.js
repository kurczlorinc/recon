import React from "react"
import SubLayout from "../components/subLayout"
import { graphql } from 'gatsby'
import Instagram from "../components/instagram"
import { Helmet } from "react-helmet"
import favicon96 from "../images/fav_96x96.ico"
import favicon32 from "../images/fav_32x32.ico"
import favicon16 from "../images/fav_16x16.ico"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"
import styled from "styled-components"
import "../styles/reset.scss"
import "../styles/style.scss"

const PageTemplate = ({ data }) => {
    const {
        title,
        subtitle,
        color,
        childContentfulPageContentRichTextNode,
        slug,
        youtube,
    } = data.contentfulPage
    const contact = data.allContentfulKapcsolat
    const site = data.site.siteMetadata
    const Bold = ({ children }) => <p className="bold">{children}</p>
    const Text = ({ children }) => <p className="content-paragraph">{children}</p>

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        },
        renderText: text => text.replace("!", "?"),
    }
    const Title = styled.div`
      text-shadow: 4px 4px ${color}dd;
    `
    const SubTitle = styled.div`
      text-shadow: 3px 3px ${color}dd;
    `
    var returned_instagram
    if (slug === "media" || slug === "multimedia") returned_instagram = <Instagram />
    return (
      <SubLayout color={color}>
        <SEO title={`${title}`} description={subtitle} />
        <Helmet>
          <meta charSet="utf-8" />

          <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
          <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
          <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
          <meta property="og:image" content={site.image} />
          <meta property="og:url" content={site.siteUrl} />

          <script type="application/ld+json">
            {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Recon Films - esküvő, rendezvény, koncert, brand videó",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+36-30-255-6453",
                                "contactType": "Customer Support"
                            }
                        }
                    `}
          </script>
        </Helmet>

        <div className="title">
          {title}
        </div>
        <div className="subtitle">
          {subtitle}
        </div>
        {childContentfulPageContentRichTextNode === null ? (
          <></>
        ) : (
          <div className="content-text">
            {documentToReactComponents(
              childContentfulPageContentRichTextNode.json,
              options
            )}
          </div>
        )}
        {returned_instagram}
        {contact.edges.map(lang => {
          if (lang.node.slug === slug) {
            return (
              <>
                <div className="name">{lang.node.name}</div>
                <div className="email">
                  <a href={`mailto:{lang.node.email}`}>{lang.node.email}</a>
                </div>
                <div className="telephone">
                  <a href={`tel:{lang.node.telephone}`} className="telephone">
                    {lang.node.telephone}
                  </a>
                </div>
                <div className="based">
                  {documentToReactComponents(
                    lang.node.childContentfulKapcsolatLocationRichTextNode.json,
                    options
                  )}
                </div>
              </>
            )
          }
        })}
        {youtube === null ? (
          <></>
        ) : (
          <div className="youtube">
            <div className="video-wrapper" style={{ aspectRatio: 3 / 4 }}>
              <iframe
                width="560"
                height="315"
                src={youtube}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </SubLayout>
    )
}

export const pageQuery = graphql`
    query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
        title
        subtitle
        color
        youtube
        childContentfulPageContentRichTextNode{
            json
        }
        slug
    }	
    allContentfulKapcsolat{
        edges{
            node{
                email
                name
                slug 
                telephone
                childContentfulKapcsolatLocationRichTextNode{
                    json
                }
            }
        } 
    }
    site {
        siteMetadata {
            title
            description
            siteUrl
            image
        }
    }
}
`

export default PageTemplate


