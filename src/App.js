import React, { Component } from 'react'
import './App.css';
import FromGroup from 'react-bootstrap/FormGroup';
import ControlLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';


let marked = require("marked");

class App extends Component {

  state = {
    markdown: ""
  }

  updateMarkdown = function (markdown) {
    this.setState({markdown});
  }

render(){
  let {markdown} = this.state;

  return (
    <div className="App container">
      <div>
        <FromGroup controlId= "formControlIsTextarea">
          <ControlLabel>Markdown Input</ControlLabel>
          <FormControl id="editor" type="text" componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)} />
        </FromGroup>
      </div>
      <div>
        <h1>Markdown output</h1>
        <div>{marked(markdown)}</div>
      </div>
    </div>
  );
}
}

export default App;
