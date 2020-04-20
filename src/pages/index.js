import React from "react"
import "../styles/reset.scss"
import "../styles/style.scss"
import { injectIntl, FormattedMessage, useIntl } from "gatsby-plugin-intl"

import Menu from "../components/menu"


const IndexPage = () => {
    return (

            <Menu main="main" />

        )
        
}

export default IndexPage