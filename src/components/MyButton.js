import React, { Component } from 'react';
import Time from "./Time";

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state, props) => {
            return {
                isOn: !state.isOn
            }
        });
    }
    // sayHello(event) {
    //     event.preventDefault();
    //     alert("Hello!");

    // }
    render() {
        const { state, props } = this
        return (
            <div>
                <button className={props.className} onClick={this.handleClick}>{state.isOn ? "Desligar" : "Ligar"}</button>
                {state.isOn ? <Time /> : "OFF"}
            </div>
        );
    };
}

export default MyButton;
