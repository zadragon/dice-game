import './index.css'
import React from 'react';
import Menu from "./Menu";
import Footer from "./Footer"
import Dice from "./Dice";

function App() {
  return (
    <div className="App">
      <Menu />
      <Dice/>
      <Footer />
    </div>
  );
}

export default App;
