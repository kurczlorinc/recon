import React, { Component } from 'react'
import UniversalLink from './universalLink'
import {Link} from 'gatsby'
import Img from "gatsby-image"

export default class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            english: false,
            language: 'EN',
            css: "non-en",
            links: [
                {
                    id: 1,
                    path: '/video',
                    text: 'Video production',
                    animation: true
                }, {
                    id: 2,
                    path:'/about',
                    text: 'About',
                    animation: false
                }, {
                    id: 3,
                    path:'/contact',
                    text: 'Contact',
                    animation: false
                }, {
                    id: 4,
                    path:'/media',
                    text: 'Media',
                    animation: false
                }, {
                    id: 5,
                    path:'https://www.instagram.com/kurczloci/',
                    text: 'Instagram.',
                    animation: false
                }
                , {
                    id: 6,
                    path:'https://www.youtube.com/channel/UC4LEEJh1ejlxQdnc77H8fRA',
                    text: 'YouTube.',
                    animation: false
                }
            ],
            titles: ["Video production", "Wedding/ Event", "Post Production", "Brand/ Trend"]
        }
    }

    enTogglerHandler = () => {
        this.state.english ?
            this.setState({
                english: false,
                language: "EN",
                css: "non-en"
            }) :
            this.setState({
                english: true,
                language: "HU",
                css: "en"
            })
    }   

    render() {
        return (
            <div className="wrapper">
                <div className="language-selection-nav">
                    <nav className="language-items">
                        <ul className="language-items-list">
                            <li className="language-option">
                                <button className={this.state.css} type="button" onClick={this.enTogglerHandler}>
                                    <Link to="/">{this.state.language}</Link>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="navigation">
                    <nav className="menu-items">
                        <ul className="menu-items-list">
                            {
                                this.state.links.map(link => {
                                    return (
                                        <li key={link.id} className="nav-option">
                                            <UniversalLink to={link.path}
                                                className={`nav-link ${link.animation ? "animate" : ""}`}
                                                activeClassName="nav-link-active"
                                                id="first"
                                                titles={this.props.titles}
                                            >
                                                {link.text.split(" ").join("\n")}
                                            </UniversalLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <div className="logo">               
                    <Link to="/">
                        <div class="rec">
                            <span><span></span></span>
                        </div>
                        <Img fluid={this.props.img} className="logo-image" />
                    </Link>
                </div>
            </div>
        )
    }
}
