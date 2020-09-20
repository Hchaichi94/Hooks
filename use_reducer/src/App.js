import React, { useReducer } from 'react'

import './App.css';
import CounterOne from './Components/CounterOne'
import CounterTwo from './Components/CounterTwo'

import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC'
import DataFetchingOne from './DataFetching/DataFetchingOne'
import DataFetchingTwo from './DataFetching/DataFetchingTwo'



export const countContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      DataFetchingOne:
      <DataFetchingOne />
      <br></br>
      <br></br>
      DataFetchingTwo:
      <DataFetchingTwo />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      ***************
      <br></br>
      <countContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        useReducer with useContext   <h1>{count}</h1><br></br>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </countContext.Provider>
      <br></br>
      <br></br>
      <br></br>
      ***************
      CounterTwo
      <CounterOne />
      <br></br>
      **********************
      <br></br>
      CounterTwo
      <CounterTwo />
    </div>
  );
}

export default App;
