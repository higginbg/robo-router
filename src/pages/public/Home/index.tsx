import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const Home = () => (
  <div className={styles.Container}>
    <div>
      <h2>Log in to view your robots</h2>

      <Link className={styles.Button} to='/login'>
        Login
      </Link>
    </div>
  </div>
);

export default Home;
