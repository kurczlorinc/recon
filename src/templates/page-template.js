import React from "react"
import SubLayout from "../components/subLayout"
import { graphql } from 'gatsby'

const PageTemplate = ({ data }) => {
    const {title, subtitle, color, content } = data.contentfulPage
    return (
        <SubLayout color={color}>
            <div className="title" style={{ textShadow: `4px 4px ${color}dd` }}>
                {title}
            </div>
            <div className="subtitle" style={{ textShadow: `3px 3px ${color}dd` }}>
                {subtitle}
            </div>
            <div className="content-text">{content.text}</div>
        </SubLayout>
    )
}

export const pageQuery = graphql`
    query pageQuery($slug: String!) {
        contentfulPage(slug: { eq: $slug }) {
            title
            subtitle
            color
            content {
                text:content
            }
        }
    }
`

export default PageTemplate


