import { useCallback, useContext, useEffect } from 'react';

import { UserContext } from '../../../context/user';

import styles from './styles.module.css';

const Dashboard = () => {
  const { robots, loadRobots, robotsLoaded, error, setError, destroyed } =
    useContext(UserContext);

  const fetchRobots = useCallback(async () => {
    const robotEndpoint = 'https://higginbg-robo-router-default-rtdb.firebaseio.com/robots.json';
    try {
      const response = await fetch(robotEndpoint);
      if (!response.ok) {
        setError('Error retrieving robots.');
      }

      const data = await response.json();
      loadRobots(data);
    }
    catch (err) {
      setError('Error retrieving robots.');
    }
  }, [loadRobots, setError]);

  useEffect(() => {
    if (robotsLoaded) {
      return;
    }

    fetchRobots();
  }, [robotsLoaded, fetchRobots]);

  if (error) {
    return (
      <div className={styles.Container}>
        <h3>{error}</h3>
      </div>
    );
  }

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
