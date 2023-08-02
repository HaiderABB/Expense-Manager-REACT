import React from 'react';
import Welcome from './Welcome';
import AddDebt from './AddDebt';
import AddExpense from './AddExpense';
import AddIncome from './AddIncome';

function Control(props) {
  if (props.number === 0) {
    return <Welcome></Welcome>;
  } else if (props.number === 1) {
    return <AddIncome></AddIncome>;
  } else if (props.number === 2) {
    return <AddExpense></AddExpense>;
  } else if (props.number === 3) {
    return <AddDebt></AddDebt>;
  }
}

export default Control;
