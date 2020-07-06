import React from "react"


export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script src="https://vjs.zencdn.net/7.8.3/video.js"></script>,
        <script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.15.0/videojs-contrib-hls.min.js"></script>,
        <script src="https://cdnjs.cloudflare.com/ajax/libs/dashjs/3.1.1/dash.all.min.js"></script>,
        <script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-dash/2.11.0/videojs-dash.min.js"></script>
    ])
}
