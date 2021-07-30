import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { AppContext } from '../../../context/app';
import Button from '../../../components/Button';
import { Role } from '../../../models/roles';

import styles from './styles.module.css';

const Login = () => {
  const { isLoggedIn, login } = useContext(AppContext);

  const [role, setRole] = useState('User' as Role);

  const roles: Role[] = ['User', 'Supreme ruler'];

  const onLogin = () => {
    login(role);
  };

  if (isLoggedIn) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className={styles.Container}>
      <form className={styles.Form} onSubmit={onLogin}>
        <label htmlFor='role'>
          <div className={styles.Label}>Role</div>
          <select
            name='role'
            id='role'
            className={styles.Select}
            onChange={(e) => setRole(e.target.value as Role)}
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
        <Button type='submit' onClick={onLogin} label='Login' />
      </form>
    </div>
  );
};

export default Login;
