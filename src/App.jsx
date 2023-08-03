import './App.css';
import Buttons from './Components/Buttons';
import { useState } from 'react';
import Control from './Components/ControlC';
import ExpenseChart from './Components/ExpenseChart';
function App() {
  const [C, setC] = useState(0);
  const setV = (valueC) => {
    setC(valueC);
  };
  const [ExpenseCategory, setCategory] = useState([]);

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
        <Control
          number={C}
          setC={setC}
          ExpenseCategory={ExpenseCategory}
          setCategory={setCategory}
        ></Control>
      </div>
      <hr className="break"></hr>
      <div className="Dashboard">
        <div id="left-dash"></div>
        <ExpenseChart></ExpenseChart>
      </div>
      <div id="right-dash"></div>
    </div>
  );
}

export default App;
