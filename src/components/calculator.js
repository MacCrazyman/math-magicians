import React from 'react';
import './calculator.css';
import CalcButton from './button';

function Calculator() {
  return (
    <div className="calculator">
      <CalcButton text="AC" />
      <CalcButton text="+/-" />
      <CalcButton text="%" />
      <CalcButton text="/" />
      <CalcButton text="7" />
      <CalcButton text="8" />
      <CalcButton text="9" />
      <CalcButton text="x" />
      <CalcButton text="4" />
      <CalcButton text="5" />
      <CalcButton text="6" />
      <CalcButton text="-" />
      <CalcButton text="1" />
      <CalcButton text="2" />
      <CalcButton text="3" />
      <CalcButton text="+" />
      <CalcButton text="0" />
      <CalcButton text="." />
      <CalcButton text="=" />

    </div>
  );
}

export default Calculator;
