import React, {Component} from "react";
import "../styles/global.css";

type AppProps = {
    message?: string;
};

type AppState = {
    count: number;
    started: boolean;
    intervalId: string;
};

class App extends React.Component<AppProps, AppState> {
    private timer: number;

    constructor(props: AppProps) {
        super(props);

        this.state = {
            count: 0,
            started: false,
            intervalId: "",
        };

        this.timer = 0;
        this.setCount = this.setCount.bind(this);
        this.stopCount = this.stopCount.bind(this);
        this.startCount = this.startCount.bind(this);
    }

    componentDidMount() {
        this.startCounter();
    }

    setCount = () => {
        this.setState({count: this.state.count + 1});
    };

    startCounter = () => {
        const {started} = this.state;
        if (!started) {
            this.timer = setInterval(this.setCount, 1000);
            this.setState({started: true});
        } else {
            clearInterval(this.timer);
            this.setState({started: false});
        }
    };

    stopCount = () => {
        clearInterval(this.timer);
        this.setState({started: false, count: 0});
    };

    startCount = () => {
        const {started} = this.state;
        if (!started) {
            this.startCounter();
        }
    };

    render() {
        return (
            <div className="App">
                <h1>{this.state.count}</h1>
                <button onClick={() => this.stopCount()}>Stop Count</button>
                <br></br>
                <br></br>
                <button onClick={() => this.startCount()}>Start Count</button>
            </div>
        );
    }
}

export default App;
