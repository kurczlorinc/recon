import React, {useState, useRef, useEffect} from 'react'
import MobileMenu from '../components/mobileMenu'

const MobileHeader = ({color}) => {

    let opener = useRef(null)
    let closer = useRef(null)
    
    //menu button state
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    })

    //disabled state
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1215 && (state.clicked === false || state.initial === false)) {
                opener.style.display = "block"
            }
            else if (window.innerWidth > 1215 && state.clicked === true) {
                closer.style.display = "none"
                setState({
                    clicked: !state.clicked,
                    menuName: "Menu",
                })
            }
            else {
                opener.style.display = "none"
            }
        }
        window.addEventListener("resize", handleResize)
        return _ => {
            window.removeEventListener("resize", handleResize)
        }
    })

    const handleMenu = () => {
        disableMenu()
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: 'Close'
            })
            opener.style.display = "none"
            closer.style.display = "block"
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: 'Menu'
            })
            opener.style.display = "block"
            closer.style.display = "none"
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: 'Close'
            })
            opener.style.display = "none"
            closer.style.display = "block"
        }
    }

    const disableMenu = () => {
        setDisabled(!disabled)
        setTimeout(() => {
            setDisabled(false)
        },1200)
    }

    return (
        <>
            <span
                ref={el => (opener = el)}
                className="menu-trigger"
                disabled={disabled}
                onClick={handleMenu}
                onKeyDown={handleMenu}
                onKeyPress={handleMenu}
                role="button"
                tabIndex="0"
            >
                <i className="menu-trigger-bar top"></i>
                <i className="menu-trigger-bar middle"></i>
                <i className="menu-trigger-bar bottom"></i>
            </span>
            <span
                ref={el => (closer = el)}
                className="close-trigger"
                disabled={disabled}
                onClick={handleMenu}
                onKeyDown={handleMenu}
                onKeyPress={handleMenu}
                role="button"
                tabIndex="0"
            >
                <i className="close-trigger-bar left"></i>
                <i className="close-trigger-bar right"></i>
            </span>
            <MobileMenu state={state} color={color} />
        </>
    )
}

export default MobileHeader
