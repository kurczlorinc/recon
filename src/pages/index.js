import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import "../styles/reset.scss"
import "../styles/style.scss"
import Menu from "../components/menu"
import { Helmet } from "react-helmet"
import favicon96 from "../images/fav_96x96.ico"
import favicon32 from "../images/fav_32x32.ico"
import favicon16 from "../images/fav_16x16.ico"
import videoPoster from "../images/recon-start.jpg"
import speakeroff from "../images/speaker-off.png"
import speakeron from "../images/speaker-on.png"
import og from "../images/recon-alap-foto-2.jpg"
import Player from "@vimeo/player"
import { useIntl } from "gatsby-plugin-intl"

const IndexPage = () => {
    const intl = useIntl()
    const { site } = useStaticQuery(
        graphql`
        query {
            site {
            siteMetadata {
                siteUrl
            }
            }
        }
        `
    )
    let [mute, setMute] = useState(true)
    const handleMute = () => {
        var video = document.getElementById("background-video")
        video.muted = !mute
        setMute(!mute)
    }
    const videoRef = useRef(null)

    useEffect(() => {
        const { current: videoElement } = videoRef
        videoElement.setAttribute("muted", "")
    }, [])
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": site.siteMetadata.siteUrl,
        url: site.siteMetadata.siteUrl,
        telephone: "+36-30-255-6453",
        address: {
        "@type": "PostalAddress",
        streetAddress: "",
        addressLocality: "Budapest",
        postalCode: "",
        addressCountry: "HU",
        },
        openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        },
        sameAs: [
        "https://www.instagram.com/kurczloci/",
        "https://www.youtube.com/channel/UCHHqFkXLGdXoTcIcQhPZF8Q",
        ],
    }

    return (
        <>
        <SEO title="Recon Films" schemaMarkup={schema} />
        <Helmet>
            <meta charSet="utf-8" />
            <title>{intl.formatMessage({ id: "main" })}</title>
            <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
            <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
            <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
            <meta property="og:image" content={og} />
            <meta property="og:url" content={site.siteMetadata.siteUrl} />
            <script>
            vid=document.getElementById("background-video")
            vid.disablePictureInPicture = true
            </script>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </Helmet>   
        <Menu main="main" />
        <div class="videowrapper">
            <video id="background-video" ref={videoRef} poster={videoPoster} loop muted autoPlay preload="auto" playsInline >
                    <source src="https://reconfilms-out.s3-eu-west-1.amazonaws.com/dash/FINAL_SHORT_2020_LOVE_LOW.mp4" type="video/mp4" />
                    <source src="https://reconfilms-out.s3-eu-west-1.amazonaws.com/dash/recon-720.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    

        <div className="speaker">
            {mute ? (
            <img src={speakeroff} onClick={handleMute} />
            ) : (
            <img src={speakeron} onClick={handleMute} />
            )}
        </div>
        </>
    )
}

export default IndexPage
