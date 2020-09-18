import React from 'react';
import './App.css';
import HookCounter from './Components/HookCounter'
import ClassCounter from './Components/ClassCounter'
import HookCounterTwo from './Components/HookCounterTwo'
import HookCounterThree from './Components/HookCounterThree'
import HookCounterFor from './Components/HookCounterFor'


function App() {
  return (
    <div className="App">
      <h1>hook</h1>
      <HookCounter />
      <ClassCounter />
      <br></br>
      <h1>previous state</h1>
      <HookCounterTwo />
      <br></br>
      <h1>with object</h1>
      <HookCounterThree />
      <br></br>
      <h1>with array</h1>
      <HookCounterFor />
    </div>
  );
}

export default App;
