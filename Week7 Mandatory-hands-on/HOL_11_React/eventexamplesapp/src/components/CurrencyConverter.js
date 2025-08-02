
import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      result: ''
    };
  }

  handleChange = (e) => {
    this.setState({ amount: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let euro = parseFloat(this.state.amount) / 90;
    this.setState({ result: `Euro Value: €${euro.toFixed(2)}` });
  }

  render() {
    return (
      <div>
        <h2 style={{color:'green'}}>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Enter amount in INR: </label>
          <input type="number" onChange={this.handleChange} value={this.state.amount} />
          <button type="submit">Convert</button>
        </form>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;
