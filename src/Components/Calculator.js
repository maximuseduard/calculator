import './Calculator.css';
import { useState } from 'react';

function Calculator() {
    let [result, setResult] = useState('0');

    const handleClick = (value) => {
        if (result.length >= 16) {
            setResult('!So Much Big Input');
            return;
        }

        if (result === '0') {
            if (isNaN(value)) result.concat(value);
            else result = result.slice(1, result.length);
        }
        setResult(result.concat(value));
    };

    const clear = () => {
        setResult('0');
    };

    const backspace = () => {
        if (result.length === 1) setResult('0');
        else setResult(result.slice(0, result.length - 1));
    };

    const calculate = () => {
        try {
            result = eval(result).toString();
            if (result.includes('.')) {
                let decimals = result.split('.')[1].length;

                if (decimals > 4) decimals = 4;

                result = +eval(result);
                result = result.toFixed(decimals).toString();
                setResult(result);
            } else {
                setResult(eval(result).toString());
            }
        } catch (err) {
            setResult('Error');
        }
    };

    return (
        <div className="Calculator">
            <div className="Visor">
                <span>{result}</span>
            </div>

            <div className="Keypad">
                {/* first row */}
                <button className="Key" onClick={clear}>
                    <span>C</span>
                </button>
                <button disabled className="Key Blank">
                    <span></span>
                </button>
                <button className="Key" onClick={() => handleClick('/')}>
                    <span className="fas fa-divide"></span>
                </button>
                <button className="Key" onClick={backspace}>
                    <span className="fas fa-backspace"></span>
                </button>

                {/* second row */}
                <button className="Key" onClick={() => handleClick('7')}>
                    <span>7</span>
                </button>
                <button className="Key" onClick={() => handleClick('8')}>
                    <span>8</span>
                </button>
                <button className="Key" onClick={() => handleClick('9')}>
                    <span>9</span>
                </button>
                <button className="Key" onClick={() => handleClick('*')}>
                    <span className="fas fa-multiply"></span>
                </button>

                {/* third row */}
                <button className="Key" onClick={() => handleClick('4')}>
                    <span>4</span>
                </button>
                <button className="Key" onClick={() => handleClick('5')}>
                    <span>5</span>
                </button>
                <button className="Key" onClick={() => handleClick('6')}>
                    <span>6</span>
                </button>
                <button className="Key" onClick={() => handleClick('-')}>
                    <span className="fas fa-minus"></span>
                </button>

                {/* forth row */}
                <button className="Key" onClick={() => handleClick('1')}>
                    <span>1</span>
                </button>
                <button className="Key" onClick={() => handleClick('2')}>
                    <span>2</span>
                </button>
                <button className="Key" onClick={() => handleClick('3')}>
                    <span>3</span>
                </button>
                <button className="Key" onClick={() => handleClick('+')}>
                    <span className="fas fa-plus"></span>
                </button>

                <button disabled className="Key Blank">
                    <span></span>
                </button>
                <button className="Key" onClick={() => handleClick('0')}>
                    <span>0</span>
                </button>
                <button className="Key" onClick={() => handleClick('.')}>
                    <span>.</span>
                </button>
                <div className="Key Equals" onClick={calculate}>
                    <span className="fas fa-equals"></span>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
