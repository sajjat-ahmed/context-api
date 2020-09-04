import React, { createContext } from 'react';
import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Shipment from './componants/Shipment/Shipment';
import { useState } from 'react';

export const CatagoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <CatagoryContext.Provider value={[count, setCount]}>
      <Header count = {count}></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CatagoryContext.Provider>
  );
}

export default App;
