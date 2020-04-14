import React, { Component } from 'react'
import {Link} from 'gatsby'

export default class animatedComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            idx: 0,
            animating: false
        }

    }
    componentDidMount() {
        setInterval(function () {
            document.getElementById("first").style.animationName = "spin_out"
            document.getElementById("first").style.animationDuration = "1s"
            setTimeout(function () {
                document.getElementById("first").style.animationName = "spin_in"
                document.getElementById("first").style.animationDuration = "1s"
                document.getElementById("first").textContent = this.props.titles[this.state.idx % this.props.titles.length].split(" ").join("\n")
                this.setState({idx: this.state.idx++})
            }, 500)
        }, 2000)
    }
    componentWillUnmount() {
        
    }

    render() {
        return (
            <Link to={this.props.to}
                id="first"
                className={this.props.className}
                activeClassName={this.props.activeClassName}
                partiallyActive={this.props.partiallyActive}>
                {this.props.children}
            </Link>
        )
    }
}
