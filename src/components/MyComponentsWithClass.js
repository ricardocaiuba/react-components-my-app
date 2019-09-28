import React, { Component } from 'react';

class MyComponentsWithClass extends Component {
    render() {
        const {props} = this ;
        return(
            <ul>
                <li>First name: {props.firstName}</li>
                <li>Last name: {props.lastName}</li>
                <li>Age: {props.age}</li>
            </ul>
        ) ;
        
    };
}

export default MyComponentsWithClass;
