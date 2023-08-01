import './App.css';
import Buttons from './Components/Buttons';
import Welcome from './Components/Welcome';
import AddIncome from './Components/AddIncome';
import AddExpense from './Components/AddExpense';
import AddDebt from './Components/AddDebt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Manager System</h1>
      </header>
      <hr></hr>
      <div className="container">
        <div className="left-div" id="left-div">
          <Buttons></Buttons>
        </div>
        <div className="right-div" id="right-div">
          <Welcome></Welcome>
          {/* <AddIncome></AddIncome> */}
          {/* <AddExpense></AddExpense> */}
          {/* <AddDebt></AddDebt> */}
        </div>
      </div>
      <hr className="break"></hr>
    </div>
  );
}

export default App;
