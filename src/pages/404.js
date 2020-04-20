import React from "react"
import SEO from "../components/seo"
import { FormattedMessage, useIntl} from "gatsby-plugin-intl"

const browser = typeof window !== "undefined" && window

const NotFoundPage = () => {
  const intl = useIntl();
  return (
    browser && (
      <div>
        <SEO title="404 Page not found" />
        <div>{intl.formatMessage({id: "notfound.header"})}</div>
        <FormattedMessage id="notfound.description" />
      </div>
    )
  )
}

export default NotFoundPage
