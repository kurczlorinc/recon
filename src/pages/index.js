import React, { useState } from "react"
import {useStaticQuery, graphql} from "gatsby"
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
import Player from "@vimeo/player"


const IndexPage = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
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
    )
    let [mute, setMute] = useState(true)
    const handleMute = () => {
        var video = document.getElementById("embeddedVideo")

        //Create a new Vimeo.Player object
        const player = new Player(video)

        //When the player is ready, set the volume to 0
        
        player.ready().then(function() {
            player.setVolume((mute===false)?0:1)
        })
        setMute(!mute)
    }
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Recon Films - esküvő, rendezvény, koncert, brand videó",
        "description": site.siteMetadata.description,
        "image": site.siteMetadata.image,
        "@id": site.siteMetadata.siteUrl,
        "url": site.siteMetadata.siteUrl,
        "telephone": "+36-30-255-6453",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Budapest",
            "postalCode": "",
            "addressCountry": "HU"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.instagram.com/kurczloci/",
            "https://www.youtube.com/channel/UC4LEEJh1ejlxQdnc77H8fRA"
        ]
    }
    
    return (
        <>
            <SEO title="Recon Films" schemaMarkup={schema} />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Recon Films - Esküvő, rendezvény, koncert, brand videó</title>
                <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
                <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
                <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
                <meta property='og:image' content={site.siteMetadata.image} />
                <meta property='og:url' content={site.siteMetadata.siteUrl} />
                <script>
                    vid=document.getElementById("background-video")
                    vid.disablePictureInPicture = true
                </script>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </Helmet>
            <Menu main="main" />
            <div class="videowrapper">
                <iframe id="embeddedVideo" src="https://player.vimeo.com/video/431172191?muted=1&autoplay=1&loop=1&byline=0&title=0&quality=1080p&autopause=0&controls=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
            
            
            
            <div className="speaker">
                {mute ? <img src={speakeroff} onClick={handleMute} /> : <img src={speakeron} onClick={handleMute} />}
            </div>
        </>
        )
}

export default IndexPage