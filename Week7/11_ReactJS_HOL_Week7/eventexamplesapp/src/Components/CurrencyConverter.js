import React, { Component } from 'react';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inr: '',
      euro: '',
      conversionRate: 0.011, // Approx 1 INR = 0.011 EUR
    };
  }

  handleChange = (e) => {
    this.setState({ inr: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inr, conversionRate } = this.state;
    const euro = (parseFloat(inr) * conversionRate).toFixed(2);
    this.setState({ euro });
  };

  render() {
    return (
      <div>
        <h2>Currency Converter (INR → EUR)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.inr}
            onChange={this.handleChange}
            placeholder="Enter amount in INR"
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && (
          <p>
            Equivalent in EUR: <strong>€{this.state.euro}</strong>
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConverter;
