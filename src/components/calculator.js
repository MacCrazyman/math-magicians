import React, { useState } from 'react';
import './calculator.css';
import CalcButton from './button';
import calculate from './logic/calculate';

const Calculator = () => {
  const [calculatorObject, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calculateObject = (e) => {
    setCalculator(calculate(calculatorObject, e.target.innerText));
  };

  return (
    <div className="calculator">
      <div id="calc-output">
        {calculatorObject.total}
        {' '}
        {calculatorObject.operation}
        {' '}
        {calculatorObject.next}
      </div>
      <CalcButton onClick={calculateObject} text="AC" className="calc-number" />
      <CalcButton onClick={calculateObject} text="+/-" className="calc-number" />
      <CalcButton onClick={calculateObject} text="%" className="calc-number" />
      <CalcButton onClick={calculateObject} text="÷" className="calc-operation" />
      <CalcButton onClick={calculateObject} text="7" className="calc-number" />
      <CalcButton onClick={calculateObject} text="8" className="calc-number" />
      <CalcButton onClick={calculateObject} text="9" className="calc-number" />
      <CalcButton onClick={calculateObject} text="x" className="calc-operation" />
      <CalcButton onClick={calculateObject} text="4" className="calc-number" />
      <CalcButton onClick={calculateObject} text="5" className="calc-number" />
      <CalcButton onClick={calculateObject} text="6" className="calc-number" />
      <CalcButton onClick={calculateObject} text="-" className="calc-operation" />
      <CalcButton onClick={calculateObject} text="1" className="calc-number" />
      <CalcButton onClick={calculateObject} text="2" className="calc-number" />
      <CalcButton onClick={calculateObject} text="3" className="calc-number" />
      <CalcButton onClick={calculateObject} text="+" className="calc-operation" />
      <CalcButton onClick={calculateObject} text="0" className="calc-zero" />
      <CalcButton onClick={calculateObject} text="." className="calc-number" />
      <CalcButton onClick={calculateObject} text="=" className="calc-operation" />

    </div>
  );
};

export default Calculator;
