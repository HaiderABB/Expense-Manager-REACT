import React from 'react';

function Buttons(props) {
  const changeValue = (value) => {
    props.changeValue(value);
  };
  return (
    <div className="Button-styling">
      <button onClick={() => changeValue(1)}>Add Income</button>
      <button onClick={() => changeValue(2)}>Add Expense</button>
      <button onClick={() => changeValue(3)}>Add Debt</button>
      <button>View Expenses</button>
      <button>View Debt</button>
      <button>View Account Summary</button>
    </div>
  );
}

export default Buttons;
