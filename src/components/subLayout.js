import React from 'react'
import Menu from './menu'
import MobileHeader from "./mobileHeader"

export default class SubLayout extends React.Component {
    render() {
        return (
            <div className="full-md-content">
                <div className="inner-container">
                    <div className="menu-container">
                        <div className="content-wrap">
                            <Menu main="sub" />
                            <div className="page-content">
                                {this.props.children}
                            </div>
                        </div>
                        <MobileHeader />
                    </div>
                </div>
            </div>
        )
    }
}   
