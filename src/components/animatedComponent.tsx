import * as React from "react"
import * as ReactDOM from "react-dom"
import {Link as GatsbyLink} from 'gatsby'

export default class AnimatedComponent extends React.Component<{ titles: string[] },
    { idx: number, animating: boolean }>{
    private timerCallback: (() => void) & { isValid?: boolean }
    /**
     *
     */
    constructor(props: {titles: string[]}) {
        super(props)
        this.state = {
            idx: 0,
            animating: false
        }
        this.timerCallback = ()=>this.OnTimer()
    }

    componentDidMount() {
        this.timerCallback.isValid = true
        setTimeout(this.timerCallback,1000)
    }

    componentWillUnmount() {
        this.timerCallback.isValid = false
    }

    private onAnimationEnd() {
        this.setState({
            animating: false,
            idx: (this.state.idx + 1) % this.props.titles.length
        })
        setTimeout(this.timerCallback, 1000)
    }

    private OnTimer() {
        this.setState({animating:true})
    }

    render() {
        return <GatsbyLink to="/"></GatsbyLink>
    }
    
    
}
