import React from 'react'
import Menu from './menu'
import MobileHeader from "./mobileHeader"

export default class SubLayout extends React.Component {
    render() {
        return (
            <div className="full-md-content">
                <div className="inner-container">
                    <div className="menu-container">
                        <div className="content-background"></div>
                        <div className="content-wrap">
                            <Menu main="sub" color={this.props.color} href={this.props.href}/>
                            <div className="page-content">
                                <div className="inner-content">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                        <MobileHeader color={this.props.color} />
                    </div>
                </div>
            </div>
        )
    }
}   
