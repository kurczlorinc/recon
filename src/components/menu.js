import React, {useState} from 'react'
import UniversalLink from './universalLink'
import Logo from './image'
import { useIntl, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import SubMenuElements from './subMenuElements'


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
                slugs: ['video','videos-munkak'],
                path_en: '/en/video',
                path_hu:'/hu/videos-munkak',
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
                slugs: ['contact','kapcsolat'],
                path_en: '/en/contact',
                path_hu:'/hu/kapcsolat',
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
        subLinks: [
            {
                id: 0,
                slugs: ['video','videos-munkak'],
                path_en: '/en/video',
                path_hu: '/hu/videos-munkak'
            },
            {
                id: 1,
                slugs: ['wedding-event','eskuvo-esemeny'],
                path_en: '/en/wedding-event',
                path_hu: '/hu/eskuvo-esemeny'
            },
            {
                id: 2,
                slugs: ['post-production','vagas-utomunka'],
                path_en: '/en/post-production',
                path_hu: '/hu/vagas-utomunka'
            },
            {
                id: 3,
                slugs: ['brand-trend','imazs-trend'],
                path_en: '/en/brand-trend',
                path_hu: '/hu/imazs-trend'
            }
        ]
            
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
            return "/en/wedding-event"
        } else {
            return "/en/wedding-event"
        }
    }

    const handlesubMenu = (id) => {
        if (intl.locale === "hu") {
            return "/en/wedding-event"
        } else {
            return "/en/wedding-event"
        }
    }

    const handleSubLanguage = () => {
        const url = typeof window !== "undefined" ? window.location.href : ""
        const slug = url.split("/").pop()
        if (intl.locale === "hu") {
            const direct = state.links.find(x => x.slugs[1] === slug)
            if (typeof direct === "undefined") {
                return "/en/wedding-event"
            } else {
                return "/en/wedding-event"
            }
        } else {
            const direct = state.links.find(x => x.slugs[0] === slug)
            if (typeof direct === "undefined") {
                return "/en/wedding-event"
            } else {
                return "/en/wedding-event"
            }
        }
        
    }

    return (
            <>
            <div className={`wrapper ${renderSwitch1(main)}`} style={{ backgroundColor: renderSwitch2(main) }}>
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
                                            <li
                                                key={link.id}
                                                className="nav-option"
                                            >
                                                <UniversalLink
                                                    to={handlePath(link.id)}
                                                    className={`nav-link ${
                                                        link.animation ? "animate" : ""
                                                    }`}
                                                    activeClassName="nav-link-active"
                                                    titles={[
                                                        new SubMenuElements(
                                                            intl.formatMessage({
                                                            id: "videoprod",
                                                        }),
                                                        handlesubMenu(0)
                                                        ),
                                                        new SubMenuElements(
                                                            intl.formatMessage({
                                                            id: "video-wedding",
                                                        }),
                                                        handlesubMenu(1)
                                                        ),
                                                        new SubMenuElements(
                                                            intl.formatMessage({
                                                            id: "video-post",
                                                        }),
                                                        handlesubMenu(2)
                                                        ),
                                                        new SubMenuElements(
                                                            intl.formatMessage({
                                                            id: "video-brand",
                                                        }),
                                                        handlesubMenu(3)
                                                        ),
                                                    ]}
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
                                                                    href={handleSubLanguage()}
                                                                    key={language}
                                                                    onClick={() => handleSubLanguage()}>
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
            </>
        )
}

export default Menu
