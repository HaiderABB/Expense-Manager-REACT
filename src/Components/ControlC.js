import React from 'react';
import Welcome from './Welcome';
import AddDebt from './AddDebt';
import AddExpense from './AddExpense';
import AddIncome from './AddIncome';
import { useState } from 'react';

function Control(props) {
  const [totalIncome, setIncome] = useState(parseInt(0));
  const [totalAmount, setAmount] = useState(0);
  const [ExpenseAmount, setExpenseAmount] = useState([]);
  const [ExpenseCategory, setCategory] = useState(['']);
  const [Lent, setLent] = useState(['']);
  const [borrowed, setBorrow] = useState(['']);
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
      ></AddIncome>
    );
  } else if (props.number === 2) {
    return <AddExpense></AddExpense>;
  } else if (props.number === 3) {
    return <AddDebt></AddDebt>;
  }
}

export default Control;
