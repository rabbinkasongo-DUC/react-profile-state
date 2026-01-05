import React from "react";

class Timer extends React.Component {
  state = {
    time: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <p className="timer">
        Temps écoulé depuis le montage : {this.state.time} secondes
      </p>
    );
  }
}

export default Timer;
