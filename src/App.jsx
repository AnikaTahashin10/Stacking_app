import { useState } from 'react';
import './App.css'; // Your CSS file for styling

function App() {
  const [stack, setStack] = useState([]);

  const pushItem = () => {
    const newItem = prompt('Enter item to push:');
    if (newItem !== null) {
      setStack([...stack, newItem]);
    }
  };

  const popItem = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return;
    }
    const poppedItem = stack.slice(0, stack.length - 1);
    setStack(poppedItem);
  };

  return (
    <div className="App">
      <h1>Stack Data Structure</h1>
      <div className="buttons">
        <button onClick={pushItem}>Push Item</button>
        <button onClick={popItem}>Pop Item</button>
      </div>
      <div className="stack">
        <h3>Stack:</h3>
        <ul>
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
