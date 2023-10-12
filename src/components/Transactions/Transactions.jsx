import React from 'react';
import css from './Transactions.module.css';

export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
