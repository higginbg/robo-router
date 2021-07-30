import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../../context/user';
import Button from '../../../components/Button';
import { Role } from '../../../models/roles';

import styles from './styles.module.css';

const Login = () => {
  const { isLoggedIn, login } = useContext(UserContext);

  const [pending, setPending] = useState(false);
  const [role, setRole] = useState('User' as Role);

  const roles: Role[] = ['User', 'Supreme ruler'];

  const onLogin = () => {
    setPending(true);

    setTimeout(() => {
      setPending(false);
      login(role);
    }, 1500);
  };

  if (pending) {
    return (
      <div className={styles.Container}>
        <div className={styles.Loading}>Logging in...</div>
      </div>
    );
  }

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
