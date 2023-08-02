import React from 'react';

function AddIncome() {
  return (
    <div className="AddIncome">
      <div className="incomeContainer">
        <input
          type="Number"
          className="income-button"
          placeholder="Enter Amount"
          required
        ></input>
      </div>
      <button className="submit">Submit</button>
    </div>
  );
}

export default AddIncome;
