import React from 'react'
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from "gatsby"
import logo from "../images/recon-logo.png"

export default () => (
    <Link to="/">
        <div className="rec">
            <span>
                <span></span>
            </span>
            </div>
            <div className="logo-image">
                <picture>
                    <img src={logo} />
                </picture>
            </div> 
    </Link>
)


