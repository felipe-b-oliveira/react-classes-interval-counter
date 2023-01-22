import React, { Component } from "react";
import "../../styles/global.css";

/**
 * Author: Felipe Oliveira
 * Description: Example of a React components using class and simple Javascript. 
 */
class JSClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            started: false,
            intervalId: null,
        };
        this.timer = null;
        this.setCounter = this.setCounter.bind(this);
        this.stopCounter = this.stopCounter.bind(this);
        this.startCounter = this.startCounter.bind(this);
    }

    componentDidMount() {
        this.startCounter();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    setCounter = () => {
        this.setState({count: this.state.count + 1});
    };

    startCounter = () => {
        const {started} = this.state;
        if (!started) {
            this.timer = setInterval(this.setCounter, 1000);
            this.setState({started: true});
        } else {
            clearInterval(this.timer);
            this.setState({started: false});
        }
    };

    stopCounter = () => {
        clearInterval(this.timer);
        this.setState({started: false, count: 0});
    };

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.stopCounter()}>Stop Count</button>
                <br></br>
                <br></br>
                <button onClick={() => this.startCounter()}>Start Count</button>
            </div>
        );
    }
}

export default JSClassCounter;
