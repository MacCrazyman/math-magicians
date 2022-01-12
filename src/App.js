import React from 'react';
import './App.css';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h2>Let&apos;s do some math!</h2>
        <Calculator />
      </div>
    );
  }
}

export default App;
