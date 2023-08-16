import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomColor() {
  var letters = '789ABCD';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 7)];
  }
  return color;
}

export const Statistics = ({ title, dataset }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {dataset.map(item => (
          <li
            key={item.id}
            className={styles.item}
            style={{
              backgroundColor: getRandomColor(),
              flex: 1,
            }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  dataset: PropTypes.array,
};
