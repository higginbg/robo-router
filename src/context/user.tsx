import { createContext, FC, useState } from 'react';
import { robotsData } from '../data/robots';
import { Robot } from '../models/robot';

import { Role } from '../models/roles';

interface UserStore {
  isLoggedIn: boolean;
  role: '' | Role;
  login: (role: Role) => void;
  logout: () => void;
  robots: Robot[];
  robotsLoaded: boolean;
  loadRobots: (robots: Robot[]) => void;
  destroyed: boolean;
  destroy: () => void;
}

export const UserContext = createContext<UserStore>({
  isLoggedIn: false,
  role: '' as '' | Role,
  login: () => {},
  logout: () => {},
  robots: robotsData,
  robotsLoaded: false,
  loadRobots: (robots) => {},
  destroyed: false,
  destroy: () => {},
});

const UserProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('' as '' | Role);
  const [robotsLoaded, setRobotsLoaded] = useState(false);
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
