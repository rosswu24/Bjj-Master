import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "../src/component/SignUp/SignUp.js"
import Fighting from "../src/component/Fighting/Fighting.js"
import UpNext from "../src/component/UpNext/UpNext.js"
import OnBoard from "../src/component/OnBoard/OnBoard.js"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SignUp />
        <Fighting/>
        <UpNext/>
        <OnBoard/>
      </div>
    );
  }
}

export default App;
