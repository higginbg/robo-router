import { Link } from 'react-router-dom';

import styles from '../../public/Home/styles.module.css';

const NotFound = () => (
  <div className={styles.Container}>
    <div>
      <h3>Page not found.</h3>
      <Link className={styles.Button} style={{ width: 80 }} to='/'>
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
