import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { Friend } from './Friend/Friend';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></Friend>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
