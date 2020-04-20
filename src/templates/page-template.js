import React from "react"
import SubLayout from "../components/subLayout"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const PageTemplate = ({ data }) => {
    const {title, subtitle, color } = data.contentfulPage
    return (
        <SubLayout color={color}>
            <div>{title}</div>
            <div>{subtitle}</div>
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
                content
            }
        }
    }
`

export default PageTemplate


