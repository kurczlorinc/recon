import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import Animated from "./animatedComponent"


export default class UniversalLink extends React.Component<{ color: string, to: string, activeClassName: string, partiallyActive: string, className: string, titles: string[], main: string }>{
    constructor(props: { color: string, to: string, activeClassName: string, partiallyActive: string, className: string, titles: string[], main: string }) {
        super(props)
    }

    render() {
        if (this.props.className.includes("animate")) {
            if (this.props.main == "main") {
                return (
                    <Animated
                        to={this.props.to}
                        className={this.props.className}
                        titles={this.props.titles}
                        activeClassName={this.props.activeClassName}
                    >
                        {this.props.children}
                    </Animated>
                )
            }
            else {
                return (
                    <div className="inner-content">
                        <GatsbyLink to={this.props.to} className={this.props.className} activeClassName={this.props.activeClassName}>
                            {(this.props.titles.length != null)?`${this.props.titles[0]}`:""}
                        </GatsbyLink>
                        <ul className="sub-menu">
                            {this.props.titles.map((item, idx) => (
                                (idx !== 0) ?
                                    <li className="sub-nav-option">
                                        <GatsbyLink
                                            to={this.props.to}
                                            className={this.props.className + " outline"}
                                            activeClassName={this.props.activeClassName}
                                            style={{WebkitTextFillColor: this.props.color }}>
                                            {item}
                                        </GatsbyLink>
                                    </li> : ""
                            ))}
                        </ul>
                    </div>
                        
                    
                )
            }
            
        }
            if (/^\/(?!\/)/.test(this.props.to)) {
                return (
                    <GatsbyLink
                        to={this.props.to}
                        className={this.props.className}
                        activeClassName={this.props.activeClassName}
                    >
                        {this.props.children}
                    </GatsbyLink>
                )
            }
            return (
                <a href={this.props.to} target="_blank" rel="noopener noreferrer">
                    {this.props.children}
                </a>
            )
    }
    
    }