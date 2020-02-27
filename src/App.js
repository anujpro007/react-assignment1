import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import input from './UserInput/UserInput.css';
import output from './UserOutput/UserOutput.css';

class App extends Component {
state = {
  username:"Yash"
};

eventhandler = (event) =>{
 this.setState(
  {username: event.target.value}
 )
}


render(){
  
  return (
    <div className="App">
      <h1>Hello, Welcome </h1>
      <UserOutput name={this.state.username}  />
      <UserInput changed={this.eventhandler}/>
      <UserOutput p="This funny tag syntax is neither a string nor HTML."/>
      <UserOutput p="It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript."/>

    </div>
  );
}
  
}

export default App;
