import React, { useEffect, useRef } from 'react'
import Home from './menu'
import gsap from 'gsap'

const MobileMenu = ({state}) => {

    let menu = useRef(null)
    let revealMenu = useRef(null)
    let revealMenuBackground = useRef(null)
    let menuInner = useRef(null)

    useEffect(() => {
        if (state.clicked === false) {
            //close
            gsap.to([revealMenu, revealMenuBackground], {
                duration: 0.8,
                height: 0,
                ease: "power4.inOut",
                stagger: {
                    amount: 0.07
                }
            })
            gsap.to(menu, {
                duration: 1,
                css: {display: "none"}
            })
        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            //open
            gsap.to(menu, {
                duration: 0,
                css: { display: "block" },
            })
            gsap.to([revealMenuBackground, revealMenu],{
                duration: 0,
                opacity: 1,
                height:"100vh"
            })
            staggerReveal(revealMenuBackground, revealMenu)
            fadeInUp(menuInner)
        } else if (state.initial === false) {
            menu.style.display ='none'
        }
    }, [state])

    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 22,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.05
            }
        })
    }

    const fadeInUp = (node) => {
        gsap.from(node, {
            y: -60,
            delay: 0.2,
            opacity: 0,
            duration: 1,
            ease: 'power.inOut'
        })
    }

    return (
        <div ref={el => (menu = el)} className="hamburger-menu">
            <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"></div>
            <div ref={el => (revealMenu = el)} className="menu-layer">
                <div ref={el => (menuInner = el)} className="hamburger-container">
                    <Home main="hamburger" />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
