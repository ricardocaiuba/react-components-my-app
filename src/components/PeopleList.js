import React, { Component } from 'react';

const myList = [
    { id: 1, name: "Ricardo", idade: 43 },
    { id: 2, name: "Carolline", idade: 35 },
    { id: 3, name: "Canjica", idade: 5 },
    { id: 4, name: "Trovão", idade: 1 }
];

class PeopleList extends Component {

    sayMyName(person) {
        alert(person.name);
    }

    render() {
        const list = myList.map(item =>
            <li
                key={item.id}
                onClick={this.sayMyName.bind(this, item)}
                className="list-group-item"
            >
                Nome: {item.name} - {item.idade} anos.
            </li>
        );

        return (
            <ul className="list-group">
                {list}
            </ul>
        );
    }
}

export default PeopleList;
