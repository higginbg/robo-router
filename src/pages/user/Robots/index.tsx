import RobotsList from './List';

import styles from './styles.module.css';

const Robots = () => (
  <>
    <div className={styles.Container}>
      <RobotsList />
    </div>

    <h3 className={styles.Title} style={{ textAlign: 'center' }}>
      Select a robot to view
    </h3>
  </>
);

export default Robots;
