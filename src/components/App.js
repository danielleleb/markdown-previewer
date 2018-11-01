import React, { Component } from 'react';
import '../App.css';
import TextEditor from './text_editor';
import TextDisplay from './text_display';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TextEditor/>
        <TextDisplay/>
      </div>
    );
  }
}

export default App;
