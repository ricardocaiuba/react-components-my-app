import React, { Component } from 'react';

class MyComponentWithObject extends Component {
    render() {
        const { props } = this ;

        return (
            <h1>Testing my component with object - {props.nameComponent}</h1>
        );

    }
}

export const MyComponents = {
    Hello: function (props) {
        return (
            <h1>Hello developers - {props.nameComponent}</h1>
        );
    },
    OtherHello: () => {
        return (
            <h1>Hello developers (with arrows functions).</h1>
        );
    }
};


export default MyComponentWithObject
