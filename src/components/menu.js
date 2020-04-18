import React, { Component } from 'react'
import UniversalLink from './universalLink'
import { Link } from 'gatsby'
import Logo from './image'


export default class Menu extends Component {
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
    
    renderSwitch(param) {
        switch (param) {
            case 'main':
                return ' main';
            case 'hamburger':
                return ' hamburger'
            default:
                return ' sub';
        }
    }

    render() {
        return (
            <div className={`wrapper ${this.renderSwitch(this.props.main)}`}>
                <div className="data-container">
                    <div className="logo">               
                        <Logo />
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
                                                    titles={["Video production", "Wedding/ Event", "Post Production", "Brand/ Trend"]}
                                                    main={this.props.main}
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
                </div>
            </div>
        )
    }
}
