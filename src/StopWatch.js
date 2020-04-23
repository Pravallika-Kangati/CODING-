import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class StopWatch extends React.Component {
  /* initializing count in constructor*/	
  constructor() {
    super();
    this.state = { seconds: 0 };
  }

  /* When start button is clicked then second is increased by 1 second */
  startTimer = e => {
    this.incrementer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  };
  
  /* When stop button is clicked then second is stopped at that time */
  stopTimer = e => {
    clearInterval(this.incrementer);
  };

  render() {
    return (
      <div className="StopWatch">
		
        <h1 className="heading" style={{ color: "blue", fontFamily: "verdana" }}>Stop Watch</h1>
        <h2 className="time">{this.state.seconds} secs</h2>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.startTimer}
        >
          Start
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.stopTimer}
        >
          Stop
        </button>
      </div>
    );
  }
}

export default StopWatch;
