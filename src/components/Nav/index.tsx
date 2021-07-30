import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../../context/app';
import { Role } from '../../models/roles';
import { navLinks } from './navLinks';

import styles from './styles.module.css';

const Nav = () => {
  const { isLoggedIn, role } = useContext(AppContext);

  return (
    <nav className={`${styles.Nav} ${isLoggedIn ? styles.LoggedIn : ''}`}>
      <h2 className={styles.Title}>Robo Router</h2>
      <ul>
        {navLinks
          .filter(({ roles }) => !roles || roles.includes(role as Role))
          .map(({ label, to, icon, exact = false }) => (
            <NavLink
              key={to}
              className={styles.Link}
              activeClassName={styles.Active}
              to={to}
              exact
            >
              <i className={icon}></i>
              {label}
            </NavLink>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
