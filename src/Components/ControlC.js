import React from 'react';
import Welcome from './Welcome';
import AddDebt from './AddDebt';
import AddExpense from './AddExpense';
import AddIncome from './AddIncome';
import { useState } from 'react';
import ViewExpenses from './ViewExpenses';

function Control(props) {
  const [totalIncome, setIncome] = useState(parseInt(0));
  const [totalAmount, setAmount] = useState(parseInt(0));
  const [ExpenseAmount, setExpenseAmount] = useState(parseInt(0));
  const [Lent, setLent] = useState([]);
  const [borrowed, setBorrow] = useState([]);
  const [LentAmount, setLentAmount] = useState([]);
  const [borrowedAmount, setBorrowAmount] = useState([]);

  if (props.number === 0) {
    return <Welcome></Welcome>;
  } else if (props.number === 1) {
    return (
      <AddIncome
        totalIncome={totalIncome}
        totalAmount={totalAmount}
        setIncome={setIncome}
        setAmount={setAmount}
        setC={props.setC}
      ></AddIncome>
    );
  } else if (props.number === 2) {
    return (
      <AddExpense
        ExpenseAmount={ExpenseAmount}
        setExpenseAmount={setExpenseAmount}
        setC={props.setC}
        totalAmount={totalAmount}
        setAmount={setAmount}
        Automobile={props.Automobile}
        setAutomobile={props.setAutomobile}
        Personal={props.Personal}
        setPersonal={props.setPersonal}
        HealthCare={props.HealthCare}
        setHealth={props.setHealth}
        Food={props.Food}
        setFood={props.setFood}
        Entertainment={props.Entertainment}
        setEntertainment={props.setEntertainment}
        Utilities={props.Utilities}
        setUtility={props.setUtility}
        Travel={props.Travel}
        setTravel={props.setTravel}
      ></AddExpense>
    );
  } else if (props.number === 3) {
    return (
      <AddDebt
        Lent={Lent}
        setLent={setLent}
        borrowed={borrowed}
        setBorrow={setBorrow}
        LentAmount={LentAmount}
        setLentAmount={setLentAmount}
        borrowedAmount={borrowedAmount}
        setBorrowAmount={setBorrowAmount}
        totalAmount={totalAmount}
        setAmount={setAmount}
        setC={props.setC}
      ></AddDebt>
    );
  } else if (props.number === 4) {
    return (
      <ViewExpenses
        ExpenseAmount={ExpenseAmount}
        Automobile={props.Automobile}
        Travel={props.Travel}
        Utilities={props.Utilities}
        Entertainment={props.Entertainment}
        Food={props.Food}
        HealthCare={props.HealthCare}
        Personal={props.Personal}
      ></ViewExpenses>
    );
  }
}

export default Control;
