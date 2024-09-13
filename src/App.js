import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  // used for equal func
  const calculate = () => {
    try {
      const result = eval(value.replace(/x/g, '*'));
      setValue(result.toString());
    } catch (error) {
      setValue('Error');
    }
  };

  // to let num be enterd by keyboard as well
  useEffect(() => {
    const handleKeyPress = (e) => {
      const { key } = e;

      if (/\d/.test(key)) {
        // for numbers
        setValue((prev) => prev + key);
      } else if (['+', '-', '*', '/'].includes(key)) {
        // for operator
        setValue((prev) => prev + key);
      } else if (key === 'Enter') {
        // for calculation (equals)
        
        calculate();
      } else if (key === 'Backspace') {
        // Backspace key
        setValue((prev) => prev.slice(0, -1));
      } else if (key === 'Escape') {
        // Handle Escape key to clear input (similar to "AC" button)
        setValue('');
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup event listener
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [value]);

// enter numbers by clicking on the screen
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div> 
            <input type="button" value="AC" onClick={() => setValue('')} />
            <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
            <input type="button" value="." onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="x" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="=" className="equal" onClick={calculate} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
