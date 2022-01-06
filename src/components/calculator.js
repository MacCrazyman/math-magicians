/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';
// import propTypes from 'prop-types';
import CalcButton from './button';

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

// Calculator.propTypes = {
//   calculatorObject: propTypes.shape({ type: propTypes.string }),
// };

export default Calculator;
