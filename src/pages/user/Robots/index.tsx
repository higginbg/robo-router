import { useContext } from 'react';
import { AppContext } from '../../../context/app';
import RobotsList from './List';

import styles from './styles.module.css';

const Robots = () => {
  const { destroyed } = useContext(AppContext);

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
