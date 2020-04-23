import React from "react";
import "./styles.css";

class Paragraph extends React.Component {
  /*intializing count value in constructor*/	
  constructor() {
    super();
    this.state = { count: 0 };
  }
  
  /* When clicked on paragraph element then count is increased by 1 */
  ParagraphClicked = event => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="ClickParagraph">
        <h2 className="countheading"> Count of Click On a Paragraph Element : {this.state.count}</h2>
        <p onClick={this.ParagraphClicked}>Click on a Paragraph Element</p>
      </div>
    );
  }
}

export default Paragraph;
