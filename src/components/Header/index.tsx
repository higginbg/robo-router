import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../context/app';

import styles from './styles.module.css';

const Header = () => {
  const { isLoggedIn, logout } = useContext(AppContext);

  const history = useHistory();

  const onLogout = () => {
    logout();
    history.push('/');
  };

  useEffect(() => {
    if (isLoggedIn) {
      document.body.classList.add('loggedIn');
      return;
    }
    document.body.classList.remove('loggedIn');
  });

  return (
    <div className={`${styles.Header} ${isLoggedIn ? styles.LoggedIn : ''}`}>
      {isLoggedIn ? (
        <button className={styles.Logout} onClick={onLogout}>
          Logout <i className='fas fa-sign-out-alt'></i>
        </button>
      ) : (
        <h2 className={styles.Title}>Robo Router</h2>
      )}
    </div>
  );
};

export default Header;
