import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import Animated from "./animatedComponent"
import SubMenuElements from "./subMenuElements"


export default class UniversalLink extends React.Component<{ color: string, to: string, activeClassName: string, partiallyActive: string, className: string, titles: SubMenuElements[], main: string }>{
    constructor(props: { color: string, to: string, activeClassName: string, partiallyActive: string, className: string, titles: SubMenuElements[], main: string }) {
        super(props)
        this.props.titles.forEach(element => {
            this.title_string_array.push(element.name)
        })

    }
    private title_string_array: string[] = new Array()

    render() {
        if (this.props.className.includes("animate")) {
            if (this.props.main == "main") {
                return (
                    <Animated
                        to={this.props.to}
                        className={this.props.className}
                        titles={this.title_string_array}
                        activeClassName={this.props.activeClassName}
                    >
                        {this.props.children}
                    </Animated>
                )
            }
            else {
                return (
                    <div className="inner-content">
                        <GatsbyLink to={this.props.titles[0].url} className={this.props.className} activeClassName={this.props.activeClassName}>
                            {(this.props.titles.length != null)?`${this.props.titles[0].name}`:""}
                        </GatsbyLink>
                        <ul className="sub-menu">
                            {this.props.titles.map((item, idx) => (
                                (idx !== 0) ?
                                    <li key={idx} className="sub-nav-option">
                                        <GatsbyLink
                                            to={item.url}
                                            className={this.props.className + " outline"}
                                            activeClassName={this.props.activeClassName}
                                            style={{WebkitTextFillColor: this.props.color }}>
                                            {item.name}
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