/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';
// import propTypes from 'prop-types';
import CalcButton from './button';
import calculate from './logic/calculate';
// import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorObject: {
        total: '12',
        next: '20',
        operation: '-',
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const { calculatorObject } = this.state;
    this.setState({
      calculatorObject: calculate(calculatorObject, e.target.innerText),
    });
  }

  render() {
    const { calculatorObject } = this.state;

    return (
      <div className="calculator">
        <div id="calc-output">
          {calculatorObject.total}
          {' '}
          {calculatorObject.operation}
          {' '}
          {calculatorObject.next}
        </div>
        <CalcButton onClick={this.handleClick} text="AC" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="+/-" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="%" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="/" className="calc-operation" />
        <CalcButton onClick={this.handleClick} text="7" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="8" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="9" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="x" className="calc-operation" />
        <CalcButton onClick={this.handleClick} text="4" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="5" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="6" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="-" className="calc-operation" />
        <CalcButton onClick={this.handleClick} text="1" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="2" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="3" className="calc-number" />
        <CalcButton onClick={this.handleClick} text="+" className="calc-operation" />
        <CalcButton onClick={this.handleClick} text="0" className="calc-zero" />
        <CalcButton onClick={this.handleClick} text="." className="calc-number" />
        <CalcButton onClick={this.handleClick} text="=" className="calc-operation" />

      </div>
    );
  }
}

// Calculator.propTypes = {
//   calculatorObject: propTypes.shape({ type: propTypes.string }),
// };

export default Calculator;
