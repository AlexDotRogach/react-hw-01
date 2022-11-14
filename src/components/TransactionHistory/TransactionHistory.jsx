import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionItem } from './TransactionItem/TransactionItem';

export const TransactionHistory = ({ items, columns }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          {columns.map(column => (
            <th className={css.headItem}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            ></TransactionItem>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.string),
};
