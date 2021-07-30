import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AppContext } from '../../../context/app';

import styles from './styles.module.css';

const RobotsList = () => {
  const { robots } = useContext(AppContext);

  const { id: selectedId = 0 } = useParams<{ id: string | undefined }>();

  if (!robots) {
    return null;
  }

  return (
    <div className={styles.List}>
      <h3 className={styles.Title}>Robots</h3>

      <ul>
        {robots.map(({ id, name }) => (
          <li key={id} className={id === +selectedId ? styles.Active : ''}>
            <Link to={`/robots/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RobotsList;
