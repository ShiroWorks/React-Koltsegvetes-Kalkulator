import React from 'react';
import { MdSend } from 'react-icons/md';
const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">költség</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="pl. albérlet"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">összeg</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="pl. 10000"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? 'szerkesztés' : 'küldés'}
        {/* submit  */}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
