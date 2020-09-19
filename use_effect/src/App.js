import React from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'
import ClassMouse from './Components/ClassMouse'
import MouseContainer from './Components/MouseContainer'
import IntervalClassCounter from './Components/IntervalClassCounter'
import IntervalHookCounter from './Components/IntervalHookCounter'
import DataFetching from './Components/DataFetching'
function App() {
  return (
    <div className="App">
      <ClassCounter />
      <br></br>
      <h1>hook</h1>
      <HookCounter />
      <br></br>
      <h1>hook</h1>
      <ClassMouse />
      <h1>only once render + return fnc "cleanUp" </h1>
      <MouseContainer />
      <br></br>
      <h1>class timer</h1>
      <IntervalClassCounter />
      <br></br>
      <h1>hook timer</h1>
      <IntervalHookCounter />
      <br></br>
      <h1>DataFetching</h1>
      <DataFetching />
    </div>
  );
}

export default App;
