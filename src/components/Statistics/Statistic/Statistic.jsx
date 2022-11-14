import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from '../Statistics.module.css';

export const Statistic = ({ label, percentage }) => {
  return (
    <li className={clsx([css.item, css[label.slice(1)] || css.default])}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

Statistic.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
