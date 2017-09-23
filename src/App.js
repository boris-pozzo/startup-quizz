import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { questions } from "./questions.js";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  increment = () => {
    this.setState({ index: this.state.index + 1 })
    console.log('increment')
  }
  render() {
    const { index } = this.state;
    let q = [questions[index]];
    const quizz = q.map((el, i) => {
      return (
        <div>
          <h3 key={i}>{el.question}</h3>
          <div>
            <p>{el.reponse.one}</p>
            <p>{el.reponse.two}</p>
            <p>{el.reponse.three}</p>
            <p>{el.reponse.four}</p>
          </div>
        </div>
      );
    });
    console.log('questions', questions[0]);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <button />
          <div>
            {quizz}
          </ div>
          <button onClick={this.increment}>></button>
        </div>
      </div>
    );
  }
}

export default App;
