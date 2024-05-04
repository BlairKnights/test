import React, { useState } from 'react';

const Calculator = () => {
    const [currentExpression, setCurrentExpression] = useState('');

    const handleNumber = (number) => {
        setCurrentExpression(currentExpression + number);
    };

    const handleOperator = (operator) => {
        setCurrentExpression(currentExpression + operator);
    };

    const handleClear = () => {
        setCurrentExpression('');
    };

    const handleEval = () => {
        try {
        // Consider using a math library like mathjs for security
        const answer = eval(currentExpression);
        setCurrentExpression(answer.toString()); // Convert answer to string for display
        } catch (error) {
        setCurrentExpression('Error');
        }
    };

    return (
        <div className="calculator">
        <input type="text" className="display" value={currentExpression} readOnly />
        <div className="buttons">
            <button className="button" onClick={() => handleNumber('1')}>1</button>
            <button className="button" onClick={() => handleNumber('2')}>2</button>
            <button className="button" onClick={() => handleNumber('3')}>3</button>
            <button className="button" onClick={() => handleNumber('+')}>+</button><br></br>
            <button className="button" onClick={() => handleNumber('4')}>4</button>
            <button className="button" onClick={() => handleNumber('5')}>5</button>
            <button className="button" onClick={() => handleNumber('6')}>6</button>
            <button className="button" onClick={() => handleOperator('*')}>*</button><br></br>
            <button className="button" onClick={() => handleNumber('7')}>7</button>
            <button className="button" onClick={() => handleNumber('8')}>8</button>
            <button className="button" onClick={() => handleNumber('9')}>9</button>
            <button className="button" onClick={() => handleOperator('-')}>-</button><br></br>
            <button className="button" onClick={() => handleOperator('/')}>/</button>
            <button className="button" onClick={() => handleNumber('0')}>0</button>
            <button className="button" onClick={handleClear}>C</button>
            <button className="button" onClick={() => handleNumber('.')}>.</button> <br></br>
            <button className="button" disabled></button>
            <button className="button" disabled></button>
            <button className="button" onClick={handleEval}>=</button>
            <button className="button" disabled></button>

        </div>
        </div>
    );
};

export default Calculator;
