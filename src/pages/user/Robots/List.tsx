import { Link, useParams } from 'react-router-dom';

import { robotsData } from '../../../data/robots';

import styles from './styles.module.css';

const RobotsList = () => {
  const { id: selectedId = 0 } = useParams<{ id: string | undefined }>();

  return (
    <div className={styles.List}>
      <h3 className={styles.Title}>Robots</h3>

      <ul>
        {robotsData.map(({ id, name }) => (
          <li key={id} className={id === +selectedId ? styles.Active : ''}>
            <Link to={`/robots/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RobotsList;
