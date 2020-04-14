import React from "react"
import "../styles/style.scss"

import Home from "../components/home"


const IndexPage = ({ data }) => <Home img={data.img.childImageSharp.fluid}  />

export const query = graphql`
{
  img: file(relativePath: { eq: "recon-logo.png" }) {
    childImageSharp {
      fluid(maxWidth: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`

export default IndexPage
