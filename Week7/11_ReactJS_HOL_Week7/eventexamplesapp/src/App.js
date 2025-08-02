import React, { Component } from 'react';
import CurrencyConverter from './Components/CurrencyConverter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // Explicit binding if not using arrow functions
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
  }

  handleIncrement = () => {
    this.setState(
      prevState => ({ count: prevState.count + 1 }),
      () => {
        this.sayHello(); // Call sayHello after increment
      }
    );
  };

  sayHello = () => {
    console.log('Hello! Static message from sayHello().');
  };

  handleDecrement() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  sayWelcome(message) {
    alert(`Welcome Message: ${message}`);
  }

  handleSyntheticEvent = e => {
    alert('I was clicked');
    console.log('Synthetic Event Object:', e);
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>React Event Handling Examples</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>{' '}
        <button onClick={this.handleDecrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome('Welcome to the React event app!')}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handleSyntheticEvent}>Synthetic Event: OnPress</button>

        <br /><br />

        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
