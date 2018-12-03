import React, { Component } from 'react';
import '../App.css';
import TextEditor from './text_editor';
import TextDisplay from './text_display';

class App extends Component {

  render() {
    return (
      <div className="App">
          <h1 className='title'>Markdown Previewer</h1>
          <div className="content">
            <TextEditor/>
            <TextDisplay/>
          </div>
      </div>
    );
  }
}

export default App;
