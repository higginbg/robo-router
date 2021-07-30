import { useCallback, useContext, useEffect, useState } from 'react';

import { AppContext } from '../../../context/app';
import { robotsData } from '../../../data/robots';

import styles from './styles.module.css';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  const { isLoggedIn, robots, setRobots, destroyed } = useContext(AppContext);

  const fetchRobots = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
      setRobots(robotsData);
    }, 1500);
  }, [setRobots]);

  useEffect(() => {
    const shouldFetchRobots = isLoggedIn && robots === null;
    if (!shouldFetchRobots) {
      return;
    }

    fetchRobots();
  }, [isLoggedIn, robots, fetchRobots]);

  if (destroyed) {
    return (
      <div className={styles.Container}>
        <h3>All robots destroyed.</h3>
      </div>
    );
  }

  if (loading && robots === null) {
    return (
      <div className={styles.Container}>
        <h3>Loading robots...</h3>
      </div>
    );
  }

  return (
    <div className={styles.Container}>
      <div>You have</div>
      <div className={styles.Count}>{(robots || []).length}</div>
      <div>robots</div>
    </div>
  );
};

export default Dashboard;
