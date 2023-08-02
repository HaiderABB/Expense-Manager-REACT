import React from 'react';

function AddExpense() {
  return (
    <div class="expense">
      <div className="expenseContainer">
        <input
          type="Number"
          className="income-button"
          placeholder="Enter Amount"
          required
        ></input>
        <select required>
          <option value="Automobile">Automobile</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Health Care">Health Care</option>
          <option value="Personal">Personal</option>
          <option value="Travel">Travel</option>
          <option value="Utilities">Utilities</option>
        </select>
      </div>
      <button className="submit">Submit</button>
    </div>
  );
}

export default AddExpense;
