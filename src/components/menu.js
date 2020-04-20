import React, {useState} from 'react'
import UniversalLink from './universalLink'
import Logo from './image'
import { useIntl, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"


const languageName = {
    en: "EN",
    hu: "HU",
}

const Menu = ({main, color}) => {
    const intl = useIntl()
    let [state] = useState({
        english: false,
            language: 'EN',
            css: "non-en",
            links: [
                {
                    id: 1,
                    slugs: ['videos','video'],
                    path_en: '/en/video',
                    path_hu:'hu/videos',
                    text: 'Video production',
                    animation: true
                }, {
                    id: 2,
                    slugs: ['about','rolam'],
                    path_en: '/en/about',
                    path_hu:'/hu/rolam',
                    text: intl.formatMessage({ id: "about" }),
                    animation: false
                }, {
                    id: 3,
                    slugs: ['contact','kontakt'],
                    path_en: '/en/contact',
                    path_hu:'/hu/kontakt',
                    text: intl.formatMessage({ id: "contact" }),
                    animation: false
                }, {
                    id: 4,
                    slugs: ['media','multimedia'],
                    path_en: '/en/media',
                    path_hu:'/hu/multimedia',
                    text: intl.formatMessage({ id: "media" }),
                    animation: false
                }, {
                    id: 5,
                    slugs: [],
                    path_en: 'https://www.instagram.com/kurczloci/',
                    path_hu:'https://www.instagram.com/kurczloci/',
                    text: intl.formatMessage({ id: "ig" }),
                    animation: false
                }
                , {
                    id: 6,
                    slugs: [],
                    path_en: 'https://www.youtube.com/channel/UC4LEEJh1ejlxQdnc77H8fRA',
                    path_hu:'https://www.youtube.com/channel/UC4LEEJh1ejlxQdnc77H8fRA',
                    text: intl.formatMessage({ id: "yt" }),
                    animation: false
                }
            ],
            titles: ["Video production", "Wedding/ Event", "Post Production", "Brand/ Trend"]
    })
    
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

    const handlePath = (id) => {
        if (intl.locale === 'hu') {
            return state.links.find(x => x.id === id).path_hu
        } else {
            return state.links.find(x => x.id === id).path_en
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
                                                <UniversalLink to={handlePath(link.id)}
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
                                                    else {
                                                        if (main==="main") {
                                                            return(
                                                                <a
                                                                    href="#!"
                                                                    key={language}
                                                                    onClick={() => changeLocale(language)}
                                                                >
                                                                    {languageName[language]}
                                                                </a>
                                                            )
                                                        } else {
                                                            return(
                                                                <a
                                                                    href="/en/about"
                                                                    key={language}
                                                                    onClick={() => changeLocale(language)}>
                                                                        {languageName[language]}
                                                                </a>
                                                            )
                                                        }
                                                    }
                                                })
                                            }
                                        </IntlContextConsumer>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                </div>
            </div>
        )
}

export default Menu
