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
        ></input>
        <select className="DebtCategory">
          <option value="Lent">Lend To</option>
          <option value="borrowed">Borrowed From</option>
        </select>
      </div>
      <button className="submit">Submit</button>
    </div>
  );
}

export default AddDebt;
