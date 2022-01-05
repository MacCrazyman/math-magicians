import React from 'react';
import './calculator.css';
import CalcButton from './button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div id="calc-output">0</div>
        <CalcButton text="AC" className="calc-number" />
        <CalcButton text="+/-" className="calc-number" />
        <CalcButton text="%" className="calc-number" />
        <CalcButton text="/" className="calc-operation" />
        <CalcButton text="7" className="calc-number" />
        <CalcButton text="8" className="calc-number" />
        <CalcButton text="9" className="calc-number" />
        <CalcButton text="x" className="calc-operation" />
        <CalcButton text="4" className="calc-number" />
        <CalcButton text="5" className="calc-number" />
        <CalcButton text="6" className="calc-number" />
        <CalcButton text="-" className="calc-operation" />
        <CalcButton text="1" className="calc-number" />
        <CalcButton text="2" className="calc-number" />
        <CalcButton text="3" className="calc-number" />
        <CalcButton text="+" className="calc-operation" />
        <CalcButton text="0" className="calc-zero" />
        <CalcButton text="." className="calc-number" />
        <CalcButton text="=" className="calc-operation" />

      </div>
    );
  }
}

export default Calculator;
