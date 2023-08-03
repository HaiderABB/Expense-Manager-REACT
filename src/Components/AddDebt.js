import React from 'react';
import { CheckAmount } from './Data';

function AddDebt(props) {
  function AddDebtPrompt() {
    let amount = document.getElementById('amount').value;
    let category = document.getElementById('debt-category').value;
    let name = document.getElementById('personName').value;

    if (CheckAmount(parseInt(amount))) {
      if (category === 'Lent' && parseInt(amount) <= props.totalAmount) {
        props.setLent([...props.Lent, name]);
        props.setLentAmount([...props.LentAmount, amount]);
        props.setAmount((prevAmount) => prevAmount - parseInt(amount));
      } else if (category === 'Borrowed') {
        props.setBorrow([...props.borrowed, name]);
        props.setBorrowAmount([...props.borrowedAmount, amount]);
        props.setAmount((prevAmount) => prevAmount + parseInt(amount));
      } else {
        alert('Amount Exceeds Balance or Amount is Invalid');
      }
      props.setC(parseInt(0));
    }
  }

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
        <select className="DebtCategory" id="debt-category" required>
          <option value="Lent">Lend To</option>
          <option value="Borrowed">Borrowed From</option>
        </select>
      </div>
      <input
        className="income-button"
        id="amount"
        type="Number"
        placeholder="Enter Amount"
        pattern="[A-Za-z]+"
        title="Only alphabets are allowed"
        required
      ></input>
      <button className="submit" onClick={() => AddDebtPrompt()}>
        Submit
      </button>
    </div>
  );
}

export default AddDebt;
