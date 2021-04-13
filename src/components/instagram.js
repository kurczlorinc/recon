import React from 'react'
import Image from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { useIntl, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const Instagram = ({ data }) => {
    const intl2 = useIntl()
    return (
        <>
        <div className="ig-photos">
            <div className="instagram-gallery">
                {data.allInstagramContent.edges.map((item, i) => (
                    item.node.localImage ? (
                            <a
                                href={`${item.node.permalink}`}
                                target='_blank'
                                rel="noopener noreferrer"
                                tabIndex='0'
                                className="instagram-image"
                            >
                            <img src={item.node.localImage.childImageSharp.fluid.src} />
                            </a>
                    ) : (<div></div>))
                )}
            </div>
        </div>
        <div className="ig-see-more">
            <a
                href={`https://www.instagram.com/kurczloci/`}
                target='_blank'
                rel="noopener noreferrer"
                tabIndex='0'
            >
                    <span>{intl2.formatMessage({ id: "more" })}</span>
            </a>
        </div>
        </>
    )
}

export default props => (
    <StaticQuery
        query={graphql`
        query {
            allInstagramContent(sort: { fields: timestamp, order: DESC }, limit: 12) {
                edges {
                    node {  
                        permalink
                        media_url
                        localImage {
                            childImageSharp {
                                fluid(maxHeight: 500, maxWidth: 500 quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
        `}
        render={data => <Instagram data={data} {...props} />}
    />
)



