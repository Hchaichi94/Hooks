import React from 'react';

import './App.css';
import ComponentC from './Components/ComponentC'
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'akrem'}>
        <ChannelContext.Provider value={'channel'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
