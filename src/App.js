import React, { Component } from 'react';
import MyComponent from './components/MyComponent';
import MyComponentsWithClass from './components/MyComponentsWithClass';
import MyComponentWithObject, { MyComponents } from "./components/MyComponentWithObject";
import MyButton from "./components/MyButton";
import PeopleList from './components/PeopleList';
import ClickList from './components/ClickList';
import ClickListItem from './components/ClickListItem';
import MyVideo from "./components/MyVideo";
import Time from "./components/Time";

import { MyContext } from "./services/MyContext";

class App extends Component {
    constructor(props) {
        super(props);
        this.item1 = React.createRef();
        this.item2 = React.createRef();

        this.state = {
            selectItem: this.item1,
            selectItem2: this.item2,
            userName: "Ricardo Rodrigues"
        };

        this.toggleItem = this.toggleItem.bind(this);
        this.toggleItem2 = this.toggleItem2.bind(this);
    }

    toggleItem() {
        this.setState(({ selectItem }) => {
            return {
                selectItem: (selectItem === this.item1 ? this.item2 : this.item1)
            };
        });
    }

    toggleItem2() {
        this.setState(({ selectItem2 }) => {
            return {
                selectItem2: (selectItem2 === this.item1 ? this.item2 : this.item1)
            };
        });
    }


    render() {
        const nameObject = "Hello";

        const MyComponentSelected = MyComponents[nameObject];

        const data = {
            firstName: "Ricardo",
            lastName: "Rodrigues",
            age: 43
        };


        return (
            <div className="container">
                <MyButton className="btn btn-outline-success" />
                <hr />
                <MyComponent />
                <hr />

                <MyComponentsWithClass
                    {...data} />
                <hr />
                <MyComponentWithObject nameComponent="Canjica" />
                <hr />
                <MyComponents.Hello />
                <hr />
                <MyComponents.OtherHello />
                <hr />
                <MyComponentSelected nameComponent="Ricardo Rodrigues" />
                <hr />
                <PeopleList />
                <hr />
                <ClickList
                    number="123"
                >
                    <h1>Ricardo (Elementos Filhos)</h1>
                    <div>Olá web developers</div>
                </ClickList>
                <ClickList>
                    <ClickListItem></ClickListItem>
                    <ClickListItem></ClickListItem>
                    <ClickListItem></ClickListItem>
                </ClickList>
                <hr />
                <div>
                    <ul className="list-group">
                        <li
                            ref={this.item1}
                            className="list-group-item"
                        >
                            {this.state.selectItem === this.item1 ? <Time /> : ""}
                        </li>
                        <li
                            ref={this.item2}
                            className="list-group-item"
                        >
                            {this.state.selectItem === this.item2 ? <Time /> : ""}
                        </li>
                    </ul>
                    <button
                        className="btn btn-outline-info"
                        onClick={this.toggleItem}
                    >
                        Toggle
                    </button>
                </div>
                <hr />
                <span>Com Portais</span>
                <div>
                    <ul className="list-group">
                        <li
                            ref={this.item1}
                            className="list-group-item"
                        >

                        </li>
                        <li
                            ref={this.item2}
                            className="list-group-item"
                        >

                        </li>
                    </ul>
                    <Time container={this.state.selectItem2.current} />
                    <button
                        className="btn btn-outline-info"
                        onClick={this.toggleItem2}
                    >
                        Toggle 2
                        </button>
                </div>
                <hr />
                <span>Contexto</span>
                <MyContext.Provider
                    value={this.state}
                >
                    <MyVideo
                        src="https://storage.coverr.co/videos/coverr-wild-horses-1561723968316?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTY5NTQ2NTEwfQ.g7xweLk9gNEIYBY3crD0aCK4FsKkDmjptdivlsT-YGc"
                    />

                    <ClickList>
                        <ClickListItem></ClickListItem>
                        <ClickListItem></ClickListItem>
                        <ClickListItem></ClickListItem>
                    </ClickList>

                </MyContext.Provider>
            </div>
        );
    }
}

export default App;
