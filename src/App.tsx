import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [count, setState] = useState(0);
  const [count1, setStat1e] = useState(0);
  const increment=()=>{
    setState(pre => pre+1)
  }

  useEffect(()=>{
    console.log('this is invoked')
    document.title = `You clicked ${count} times`;
  },[count])
  return (
    <div className="App">
        <button onClick={increment}>Increment</button>
        <button onClick={()=>setStat1e(prev=>prev+1)}>Increment {count1}</button>
        <span>This is the count value {count}</span>
    </div>
  );
}

export default App;
