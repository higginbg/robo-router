import { useContext } from 'react';
import Button from '../../../components/Button';
import { AppContext } from '../../../context/app';

import styles from './styles.module.css';

const Destruction = () => {
  const { destroyed, destroy } = useContext(AppContext);

  if (destroyed) {
    return (
      <div className={styles.Container}>
        <h2 className={styles.Destroyed}>All robots destroyed!</h2>
      </div>
    );
  }

  return (
    <div className={styles.Container}>
      <div>
        <h2>Click below to destroy all robots.</h2>

        <div>
          <Button onClick={destroy} label='Destroy everything!' />
        </div>
      </div>
    </div>
  );
};

export default Destruction;
