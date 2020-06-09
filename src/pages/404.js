import React from "react"
import SEO from "../components/seo"
import { useIntl } from "gatsby-plugin-intl"
import "../styles/reset.scss"
import "../styles/style.scss"
import { Helmet } from "react-helmet"
import favicon96 from "../images/fav_96x96.ico"
import favicon32 from "../images/fav_32x32.ico"
import favicon16 from "../images/fav_16x16.ico"
import Logo from "../components/image"

const browser = typeof window !== "undefined" && window

const NotFoundPage = () => {
  const intl = useIntl();
  return (
    browser && (
      <div className="wrap-404">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Recon Films - 404 </title>
          <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
          <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
          <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
        </Helmet>
        <div className="logo"><Logo /></div>
        <div className="inner-404">
          <div className="header-404">{intl.formatMessage({ id: "notfound.header" })}</div>
          <div className="desc-404">{intl.formatMessage({ id: "notfound.description" })}</div>
        </div>
        
      </div>
    )
  )
}

export default NotFoundPage
