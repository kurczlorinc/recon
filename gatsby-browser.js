exports.onClientEntry = () => {
    console.log("onClientEntry")
}

exports.onInitialClientRender = () => {
    console.log("onInitialClientRender")
}

exports.onPostPrefetchPathname = () => {
    console.log("onPostPrefetchPathname")
}

exports.onPreRouteUpdate = () => {
    console.log("onPreRouteUpdate")
}

exports.onPrefetchPathname = () => {
    console.log("onPrefetchPathname")
}

exports.onRouteUpdate = () => {
    console.log("onRouteUpdate")
}

exports.onRouteUpdateDelayed = () => {
    console.log("onRouteUpdateDelayed")
}
