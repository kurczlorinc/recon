import React from 'react'
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
            query HeadingQuery
            {
                file(relativePath: { eq: "recon-logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }
        `}
        render={data => (
        <Link to="/">
            <div className="rec">
                <span>
                    <span></span>
                </span>
            </div>
            <Img fluid={data.file.childImageSharp.fluid} className="logo-image" />
        </Link>
        )}
    />
)

