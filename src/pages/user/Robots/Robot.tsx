import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { UserContext } from '../../../context/user';
import RobotsList from './List';

import styles from './styles.module.css';

const Robots = () => {
  const { robots } = useContext(UserContext);

  const { id = 1 } = useParams<{ id?: string | undefined }>();

  if (!robots) {
    return null;
  }

  const selectedRobot = robots.find((robot) => robot.id === +id);
  const { name, image } = selectedRobot || {};

  return (
    <>
      <div className={styles.Container}>
        <RobotsList />
      </div>

      {!selectedRobot && (
        <h3 style={{ textAlign: 'center' }}>Robot not found with this id.</h3>
      )}

      {selectedRobot && (
        <div className={styles.Card}>
          <img src={image} alt={name} />
          <h3>{name}</h3>
        </div>
      )}
    </>
  );
};

export default Robots;
