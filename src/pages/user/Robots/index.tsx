import { useContext } from 'react';
import { UserContext } from '../../../context/user';
import RobotsList from './List';

import styles from './styles.module.css';

const Robots = () => {
  const { destroyed } = useContext(UserContext);

  if (destroyed) {
    return <div className={styles.Destroyed}>You destroyed all robots!!!</div>;
  }

  return (
    <>
      <div className={styles.Container}>
        <RobotsList />
      </div>

      <h3 className={styles.Title} style={{ textAlign: 'center' }}>
        Select a robot to view
      </h3>
    </>
  );
};

export default Robots;
