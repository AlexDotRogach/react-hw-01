import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './Friend.module.css';

export const Friend = ({ name, isOnline, avatar }) => {
  return (
    <li className={css.listItem}>
      <div
        className={clsx(
          [css.itemStatus],
          isOnline ? css.isOnline : css.isntOnline
        )}
        type="checkbox"
      ></div>
      <img className={css.itemImg} src={avatar} alt={name}></img>
      <span className={css.itemText}>{name}</span>
    </li>
  );
};

Friend.propTypes = {
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
};
