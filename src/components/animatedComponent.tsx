import * as React from "react"
import * as ReactDOM from "react-dom"
import {Link as GatsbyLink} from 'gatsby'

export default class AnimatedComponent extends React.Component<{titles: string[], to: string, className: string, activeClassName: string  },
    { idx: number, animating: boolean }>{
    private timerCallback: (() => void) & { isValid?: boolean }
    /**
     *
     */
    constructor(props: {titles: string[], to: string, className: string, activeClassName: string}) {
        super(props)
        this.state = {
            idx: 0,
            animating: false
        }
        this.timerCallback = ()=>this.OnTimer()
    }

    componentDidMount() {
        this.timerCallback.isValid = true
        setInterval(this.timerCallback,1000)
    }

    componentWillUnmount() {
        this.timerCallback.isValid = false
    }

    private afterAnimation() {
        this.setState({
            animating: false,
            idx: (this.state.idx + 1) % this.props.titles.length
        })
        setTimeout(this.timerCallback, 1000)
    }

    private OnTimer() {
        this.setState({ animating: true })
    }

    render() {
            return (
                <div className={`animated-content`}>
                    <GatsbyLink
                            to={this.props.to}
                            id="first"
                            className={`previous ${this.props.className } ${this.state.animating?"animating":""}`}
                            onAnimationEnd={()=>this.afterAnimation()}
                        >
                        {this.props.titles[this.state.idx].split(" ").join("\n")}
                    </GatsbyLink>
                    <GatsbyLink
                            to={this.props.to}
                            id="second"
                            className={`next ${this.props.className} ${this.state.animating?"animating":""}`}
                        >
                        {this.props.titles[(this.state.idx + 1) % this.props.titles.length].split(" ").join("\n")}    
                    </GatsbyLink>
                </div>
            )
        
    }
    
    
}
