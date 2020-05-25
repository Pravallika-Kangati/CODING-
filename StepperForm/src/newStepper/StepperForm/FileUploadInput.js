import React from "react";
import { TextField } from "@material-ui/core";

class FileUploadInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: ""
    };
  }

  onChange = e => {
    switch (e.target.name) {
      case "selectedFile":
        if (e.target.files.length > 0) {
          this.setState(
            { fileName: e.target.files[0].name },

            console.log("The Uploaded File is", e.target.files[0])
          );
        }
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    const { fileName } = this.state;
    let file = null;

    file = fileName ? (
      <span>File Selected - {fileName}</span>
    ) : (
      <span>Choose a file...</span>
    );

    return (
        <div>
          <label htmlFor="file">{file}</label>
          <br />
          <TextField
            id="file"
            type="file"
            name="selectedFile"
            variant="outlined"
            onChange={event => this.onChange(event)}
          />
        </div>
    );
  }
}

export default FileUploadInput;
