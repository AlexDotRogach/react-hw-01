import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Statistic } from './Statistic/Statistic';

export const Statistics = ({ title, statistics }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {statistics.map(({ label, id, percentage }) => {
          return (
            <Statistic
              key={id}
              label={label}
              percentage={percentage}
            ></Statistic>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired,
};
