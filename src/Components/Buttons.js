import React from 'react';

function Buttons(props) {
  const changeValue = (value) => {
    props.changeValue(value);
  };

  function income() {
    changeValue(1);
  }
  function expense() {
    changeValue(2);
  }
  function debt() {
    changeValue(3);
  }

  return (
    <div className="Button-styling">
      <button onClick={() => income()}>Add Income</button>
      <button onClick={() => expense()}>Add Expense</button>
      <button onClick={() => debt()}>Add Debt</button>
      <button>View Expenses</button>
      <button>View Debt</button>
      <button>View Account Summary</button>
    </div>
  );
}

export default Buttons;
