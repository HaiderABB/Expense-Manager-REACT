import React from 'react';
import ExpenseList from './ExpenseList';

function ViewExpenses(props) {
  return (
    <div>
      <ExpenseList
        Automobile={props.Automobile}
        Travel={props.Travel}
        Utilities={props.Utilities}
        Entertainment={props.Entertainment}
        Food={props.Food}
        HealthCare={props.HealthCare}
        Personal={props.Personal}
      ></ExpenseList>
      <p></p>
    </div>
  );
}

export default ViewExpenses;
