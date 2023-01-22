import React, {Component} from "react";
import "../../styles/global.css";

type AppProps = {
    message?: string;
};

type AppState = {
    count: number;
    stoped: boolean;
};

/**
 * Author: Felipe Oliveira
 * Description: Example of a React components using class and Typescript.
 */
class TSClassCounter extends React.Component<AppProps, AppState> {
    private intervalID: number;

    constructor(props: AppProps) {
        super(props);

        this.state = {
            count: 0,
            stoped: true
        };

        this.intervalID = 0;
        this.setCount = this.setCount.bind(this);
        this.stopCounter = this.stopCounter.bind(this);
        this.startCounter = this.startCounter.bind(this);
    }

    componentDidMount() {
        this.startCounter();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    setCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    startCounter = () => {
        const { stoped } = this.state;
        console.log(stoped)
        if (stoped) {
            this.intervalID = setInterval(this.setCount, 1000);
            this.setState({ stoped: false });
        } else {
            clearInterval(this.intervalID);
            this.setState({ stoped: true });
        }
    };

    stopCounter = () => {
        clearInterval(this.intervalID);
        this.setState({ stoped: true, count: 0 });
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

export default TSClassCounter;
