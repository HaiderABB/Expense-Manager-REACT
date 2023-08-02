import React from 'react';

function AddDebt() {
  return (
    <div className="Debt">
      <div className="DebtContainer">
        <input
          type="text"
          placeholder="Enter the name of person"
          className="personName"
          id="personName"
          required
          maxLength={37}
        ></input>
        <select className="DebtCategory">
          <option value="Lent">Lend To</option>
          <option value="borrowed">Borrowed From</option>
        </select>
      </div>
      <input
        className="income-button"
        type="Number"
        placeholder="Enter Amount"
        pattern="[A-Za-z]+"
        title="Only alphabets are allowed"
        required
      ></input>
      <button className="submit">Submit</button>
    </div>
  );
}

export default AddDebt;
