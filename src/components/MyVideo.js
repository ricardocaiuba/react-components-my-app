import React, { Component } from 'react';

import { MyContext } from "../services/MyContext";

class MyVideo extends Component {

    static contextType = MyContext;

    constructor(props) {
        super(props);

        this.myVideo = React.createRef();
        this.start = this.start.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
    }


    start() {
        this.myVideo.current.play();
    }

    pauseVideo() {
        this.myVideo.current.pause();
    }
    render() {
        return (
            <div className="container">
                <strong>{this.context.userName}</strong>
                <br />
                <video
                    src={this.props.src}
                    width="400"
                    ref={this.myVideo}
                />
                <br />
                <button
                    className="btn btn-outline-info"
                    onClick={this.start}

                >
                    start
                </button>
                <span> </span>
                <button
                    className="btn btn-outline-info"
                    onClick={this.pauseVideo}

                >
                    pause
                </button>
            </div>
        )
    }
}

export default MyVideo;
