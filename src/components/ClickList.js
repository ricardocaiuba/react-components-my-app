import React, { Component } from 'react';

import { Channel } from "../services/EventEmitter";

class ClickList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            hasError: false
        };
        this.setTotal = this.setTotal.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentDidMount() {
        Channel.on("listItem:click", this.setTotal);
    }

    componentWillUnmount() {
        Channel.removeListener("listItem:click", this.setTotal);
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error) {
        console.log(error);
    }

    restart() {
        this.setState({
            total: 0,
            hasError: false
        });
    }

    setTotal() {
        this.setState(state => {
            return {
                total: state.total + 1
            }
        });
    }

    render() {
        const { state } = this;
        if (state.hasError) {
            return (
                <button
                    onClick={this.restart}
                    className="btn btn-outline-success"
                >
                    Restart
                </button>
            );
        }
        return (
            <div className="container">
                Total: {state.total}
                <ul className="list-group">
                    {this.props.children.map((item, index) => {
                        return (
                            <item.type
                                index={index}
                            >
                                {item.props.children}
                            </item.type>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default ClickList;
