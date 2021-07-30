import { robotsData } from '../../../data/robots';

import styles from './styles.module.css';

const Dashboard = () => {
  const robotCount = robotsData.length;

  return (
    <h3 className={styles.Container}>
      <div>You have</div>
      <div className={styles.Count}>{robotCount}</div>
      <div>robots</div>
    </h3>
  );
};

export default Dashboard;
