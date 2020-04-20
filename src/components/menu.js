import React, {useState, Component } from 'react'
import UniversalLink from './universalLink'
import { Link } from 'gatsby'
import Logo from './image'
import { injectIntl, FormattedMessage, useIntl, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import {graphql} from 'gatsby'

const languageName = {
    en: "EN",
    hu: "HU",
}

const Menu = ({main, color}) => {
    const intl = useIntl()
    let [state, setState] = useState({
        english: false,
            language: 'EN',
            css: "non-en",
            links: [
                {
                    id: 1,
                    path: '/video_regi',
                    text: 'Video production',
                    animation: true
                }, {
                    id: 2,
                    path:'/about',
                    text: intl.formatMessage({ id: "about" }),
                    animation: false
                }, {
                    id: 3,
                    path:'/contact',
                    text: intl.formatMessage({ id: "contact" }),
                    animation: false
                }, {
                    id: 4,
                    path:'/media',
                    text: intl.formatMessage({ id: "media" }),
                    animation: false
                }, {
                    id: 5,
                    path:'https://www.instagram.com/kurczloci/',
                    text: intl.formatMessage({ id: "ig" }),
                    animation: false
                }
                , {
                    id: 6,
                    path:'https://www.youtube.com/channel/UC4LEEJh1ejlxQdnc77H8fRA',
                    text: intl.formatMessage({ id: "yt" }),
                    animation: false
                }
            ],
            titles: ["Video production", "Wedding/ Event", "Post Production", "Brand/ Trend"]
    })

    const enTogglerHandler = () => {
        state.english ?
            setState({
                english: false,
                language: "EN",
                css: "non-en"
            }) :
            setState({
                english: true,
                language: "HU",
                css: "en"
            })
    }
    
    const renderSwitch1 = (param) => {
        switch (param) {
            case 'main':
                return ' main';
            case 'hamburger':
                return ' hamburger'
            default:
                return ' sub';
        }
    }

    const renderSwitch2 = (param) => {
        switch (param) {
            case 'main':
                return ``
            case 'hamburger':
                return `${color}`
            default:
                return `${color}`
        }
    }

        return (
            <div className={`wrapper ${renderSwitch1(main)}`} style={{backgroundColor: renderSwitch2(main)}}>
                <div className="data-container">
                    <div className="logo">               
                        <Logo />
                    </div>
                    <div className="navigation">
                        <nav className="menu-items">
                            <ul className="menu-items-list">
                                {
                                    state.links.map(link => {
                                        return (
                                            <li key={link.id} className="nav-option">
                                                <UniversalLink to={link.path}
                                                    className={`nav-link ${link.animation ? "animate" : ""}`}
                                                    activeClassName="nav-link-active"
                                                    titles={[
                                                        intl.formatMessage({ id: "videoprod" }),
                                                        intl.formatMessage({ id: "video-wedding" }),
                                                        intl.formatMessage({ id: "video-post" }),
                                                        intl.formatMessage({ id: "video-brand" })]}
                                                    main={main}
                                                    partiallyActive=""
                                                    color={color}
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
                                    <button type="button">
                                        <IntlContextConsumer>
                                            {({ languages, language: currentLocale }) =>
                                                languages.map(language => {
                                                    if(currentLocale === language) 
                                                    return(
                                                        <></>
                                                    )
                                                    else return(
                                                        <a
                                                            key={language}
                                                            onClick={() => changeLocale(language)}
                                                        >
                                                            {languageName[language]}
                                                        </a>
                                                    )
                                                })
                                            }
                                        </IntlContextConsumer>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                </div>
                <div></div>
            </div>
        )
}

export default Menu
