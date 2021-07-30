import { useCallback, useContext, useEffect } from 'react';

import { UserContext } from '../../../context/user';
import { robotsData } from '../../../data/robots';

import styles from './styles.module.css';

const Dashboard = () => {
  const { robots, loadRobots, robotsLoaded, destroyed } =
    useContext(UserContext);

  const fetchRobots = useCallback(() => {
    setTimeout(() => {
      loadRobots(robotsData);
    }, 1500);
  }, [loadRobots]);

  useEffect(() => {
    if (robotsLoaded) {
      return;
    }

    fetchRobots();
  }, [robotsLoaded, fetchRobots]);

  if (destroyed) {
    return (
      <div className={styles.Container}>
        <h3>All robots destroyed.</h3>
      </div>
    );
  }

  if (!robotsLoaded) {
    return (
      <div className={styles.Container}>
        <h3>Loading robots...</h3>
      </div>
    );
  }

  return (
    <div className={styles.Container}>
      <div>You have</div>
      <div className={styles.Count}>{robots.length}</div>
      <div>robots</div>
    </div>
  );
};

export default Dashboard;
