import React, { Component } from "react";
import ReactDOM from "react-dom";

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            timeTwo: 123,
            timeThree: 456
        };

        /*
        setTimeout(() => {
            this.setState({
                time: 5
            }) ;        
        }, 1000) ;
        */
    }

    componentDidMount() {
        this.Interval = setInterval(() => {
            console.log(this.state.time);
            this.setState((state, props) => {
                return {
                    time: state.time + 1
                }
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.Interval);
    }

    render() {
        const { state, props } = this;
        const element = <div>{state.time} - {state.timeTwo} - {state.timeThree}</div>;
        return (
            props.container ? ReactDOM.createPortal(element, props.container) : <div>{state.time} - {state.timeTwo} - {state.timeThree}</div>
        );
    };
}

export default Time;
