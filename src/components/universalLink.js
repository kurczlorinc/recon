import React from "react"
import { Link as GatsbyLink } from "gatsby"
import Animated from "./animatedComponent"


const UniversalLink = ({ children, to, activeClassName, partiallyActive, className, titles, ...other }) => {
    const internal = /^\/(?!\/)/.test(to)
    if (className.includes("animate")) {
        return (
            <Animated  titles={titles}>
                {children}
            </Animated>
        )
    }
    if (internal) {
        return (
        <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            partiallyActive={partiallyActive}
            {...other}
        >
            {children}
        </GatsbyLink>
        )
    }
    return (
        <a href={to} {...other} target="_blank" rel="noopener noreferrer">
        {children}
        </a>
    )
    }
export default UniversalLink