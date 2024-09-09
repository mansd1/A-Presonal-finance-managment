import React, { useState, useRef } from "react";

export default function AccountTable({ initialName }) {
  const inputName = useRef();

  const [isEditing, setEditing] = useState(false);
  const [accountName, setAccountName] = useState(initialName);
  const [accountsData, setAccountsData] = useState([
    { name: "Cash", income: 5000, expenses: 3000, balance: 2000 },
    {
      name: "Bank of Saudi Arabia",
      income: 9000,
      expenses: 10000,
      balance: -1000,
    },
    {
      name: "Bank Al-Rajhi",
      income: 0,
      expenses: 0,
      balance: 0,
    },
    {
      name: "Bank Al-ِAnma",
      income: 0,
      expenses: 0,
      balance: 0,
    },
  ]);

  const [isAddingAccount, setIsAddingAccount] = useState(false);
  const [newAccount, setNewAccount] = useState({
    name: "",
    income: 0,
    expenses: 0,
  });

  function handleEditClick() {
    setEditing((editing) => !editing);
  }

  function handleChange(event) {
    setAccountName(event.target.value);
  }

  function handleDeleteClick(index) {
    setAccountsData((prev) => prev.filter((_, i) => i !== index));
  }

  function handleAddAccountClick() {
    setIsAddingAccount(true);
  }

  function handleNewAccountChange(event) {
    const { name, value } = event.target;
    setNewAccount((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddNewAccount() {
    setAccountsData((prev) => [
      ...prev,
      {
        name: newAccount.name,
        income: parseFloat(newAccount.income),
        expenses: parseFloat(newAccount.expenses),
        balance:
          parseFloat(newAccount.income) - parseFloat(newAccount.expenses),
      },
    ]);
    setNewAccount({ name: "", income: 0, expenses: 0 });
    setIsAddingAccount(false);
  }

  let userName = <h2>{accountName}</h2>;

  if (isEditing) {
    userName = (
      <input
        className="input-name"
        type="text"
        required
        value={accountName}
        onChange={handleChange}
        ref={inputName}
      />
    );
  }

  let numberTotalAcc = accountsData.length;

  const totalIncome = accountsData.reduce(
    (acc, account) => acc + account.income,
    0
  );
  const totalExpenses = accountsData.reduce(
    (acc, account) => acc + account.expenses,
    0
  );
  const totalBalance = accountsData.reduce(
    (acc, account) => acc + account.balance,
    0
  );

  return (
    <div className="acc-container" id="Account">
      <div className="header-acc">
        <button onClick={handleAddAccountClick} className="add-account-button">
          <i class="ri-add-line"></i>
          Add Account
        </button>
        <button onClick={handleEditClick} className="add-account-button-edit">
          <i class="ri-pencil-fill"></i>
          {isEditing ? "Save" : `Edit Name Account `}
        </button>
        {userName}
      </div>

      <div className="accounts-summary">
        <div className="item">
          <h3>{numberTotalAcc}</h3>
          <p>Total Accounts</p>
        </div>
        <div className="item">
          <h3>SAR. {totalIncome}</h3>
          <p>Total Income</p>
        </div>
        <div className="item">
          <h3>SAR. {totalExpenses}</h3>
          <p>Total Expenses</p>
        </div>
        <div className="item">
          <h3>SAR. {totalBalance}</h3>
          <p>Total Balance</p>
        </div>
      </div>

      {isAddingAccount && (
        <div className="add-account-form">
          <h3>Add New Account</h3>
          <input
            type="text"
            name="name"
            placeholder="Account Name"
            value={newAccount.name}
            onChange={handleNewAccountChange}
          />
          <input
            type="number"
            name="income"
            placeholder="Income"
            value={newAccount.income}
            onChange={handleNewAccountChange}
          />
          <input
            type="number"
            name="expenses"
            placeholder="Expenses"
            value={newAccount.expenses}
            onChange={handleNewAccountChange}
          />
          <button onClick={handleAddNewAccount}>Done</button>
        </div>
      )}

      <table className="accounts-table">
        <thead>
          <tr>
            <th>Account Details</th>
            <th>Total Income</th>
            <th>Total Expenses</th>
            <th>Current Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {accountsData.map((account, index) => (
            <tr key={index}>
              <td>{account.name}</td>
              <td>SAR. {account.income}</td>
              <td>SAR. {account.expenses}</td>
              <td style={{ color: account.balance >= 0 ? "green" : "red" }}>
                SAR. {account.balance}
              </td>
              <td>
                <button
                  onClick={() => handleDeleteClick(index)}
                  className="edit-button"
                >
                  <i class="ri-delete-bin-6-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
