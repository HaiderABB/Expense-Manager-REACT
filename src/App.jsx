import './App.css';
import Buttons from './Components/Buttons';
import { useState } from 'react';
import Control from './Components/ControlC';

function App() {
  const [C, setC] = useState(0);
  const setV = (valueC) => {
    setC(valueC);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Manager System</h1>
      </header>
      <hr></hr>
      <div className="container">
        <div className="left-div" id="left-div">
          <Buttons changeValue={setV}></Buttons>
        </div>
        <div className="right-div" id="right-div"></div>
        <Control number={C} setC={setC}></Control>
      </div>
      <hr className="break"></hr>
    </div>
  );
}

export default App;
