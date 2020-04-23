import React from "react";

class ArrayConversion extends React.Component {
  /*Declaring Input array in constructor */
  constructor() {
    super();
    this.state = { InputArray: [[1, 2, 3, 4], [10, 20, 30, 40]] };
  }
  
  /*Converting array row elements to column elements and viceversa*/  
  transpose = array => {
    let result = [];
    var arraywidth = array.length || 0;
    var arrayheight = array[0] instanceof Array ? array[0].length : 0;
    if (arrayheight === 0 || arraywidth === 0) {
      return [];
    }
    var i, j;
    for (i = 0; i < arrayheight; i++) {
      result[i] = [];
      for (j = 0; j < arraywidth; j++) {
        result[i][j] = array[j][i];
      }
    }
    return result;
  };
  render() {
	/*calling transpose method with Inputarray as passing argument and storing in Output Array */  
    var OutputArray = this.transpose(this.state.InputArray);
    return (
      <div className="ArrayConversion">
        <h2 className="heading" style={{ color: "blue", fontFamily: "verdana" }}>
          Array Conversion
        </h2>
        <p>
          Output Array Elements:
          {OutputArray.map(e => (
            <li className="Array">
              {e.map(e1 => (
                <li>{e1}</li>
              ))}
            </li>
          ))}
        </p>
      </div>
    );
  }
}

export default ArrayConversion;
