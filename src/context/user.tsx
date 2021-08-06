import { createContext, FC, useState } from 'react';
import { Robot } from '../models/robot';

import { Role } from '../models/roles';

interface UserStore {
  isLoggedIn: boolean;
  role: '' | Role;
  login: (role: Role) => void;
  logout: () => void;
  robots: Robot[];
  robotsLoaded: boolean;
  error: undefined | string;
  setError: (messge: undefined | string) => void;
  loadRobots: (robots: Robot[]) => void;
  destroyed: boolean;
  destroy: () => void;
}

export const UserContext = createContext<UserStore>({
  isLoggedIn: false,
  role: '' as '' | Role,
  login: () => {},
  logout: () => {},
  robots: [],
  robotsLoaded: false,
  error: undefined as undefined | string,
  setError: (message) => {},
  loadRobots: (robots) => {},
  destroyed: false,
  destroy: () => {},
});

const UserProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('' as '' | Role);
  const [robotsLoaded, setRobotsLoaded] = useState(false);
  const [error, setError] = useState(undefined);
  const [robots, setRobots] = useState([] as Robot[]);
  const [destroyed, setDestroyed] = useState(false);

  const login = (role: Role) => {
    setRole(role);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setRole('');
    setIsLoggedIn(false);
    setDestroyed(false);
    setRobots([]);
    setRobotsLoaded(false);
    setError(undefined);
  };

  const loadRobots = (robots: Robot[]) => {
    setRobotsLoaded(true);
    setRobots(robots);
  };

  const destroy = () => {
    setRobots([]);
    setDestroyed(true);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        role,
        login,
        logout,
        robots,
        robotsLoaded,
        error,
        setError: setError as (message: undefined | string) => void,
        loadRobots,
        destroyed,
        destroy,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
