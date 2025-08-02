// File: src/App.js
import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConverter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  sayHello = () => {
    this.setState({ message: 'Hello! This is a static message.' });
  }

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  sayWelcome = (msg) => {
    this.setState({ message: msg });
  }

  onPress = () => {
    this.setState({ message: 'I was clicked' });
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.count}</p>

        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome('Welcome')}>Say Welcome</button>

        <br /><br />

        <button onClick={this.onPress}>OnPress</button>

        <p>{this.state.message}</p>

        <hr />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;

