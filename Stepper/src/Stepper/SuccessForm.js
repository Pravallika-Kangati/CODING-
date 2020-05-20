import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class SuccessForm extends Component {

  render() {
    return (
      <div style={{paddingLeft:200}}>
        <p>Thank you for your submission</p>
      </div>
    );
  }
}

export default SuccessForm;
