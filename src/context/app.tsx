import { createContext, FC, useState } from 'react';
import { robotsData } from '../data/robots';
import { Robot } from '../models/robot';

import { Role } from '../models/roles';

interface AppStore {
  isLoggedIn: boolean;
  role: '' | Role;
  login: (role: Role) => void;
  logout: () => void;
  robots: Robot[] | null;
  setRobots: (robots: Robot[] | null) => void;
  destroyed: boolean;
  destroy: () => void;
}

export const AppContext = createContext<AppStore>({
  isLoggedIn: false,
  role: '' as '' | Role,
  login: () => {},
  logout: () => {},
  robots: robotsData,
  setRobots: (robots) => {},
  destroyed: false,
  destroy: () => {},
});

const UserProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('' as '' | Role);
  const [robots, setRobots] = useState(null as Robot[] | null);
  const [destroyed, setDestroyed] = useState(false);

  const login = (role: Role) => {
    setRole(role);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setRole('');
    setIsLoggedIn(false);
    setDestroyed(false);
    setRobots(null);
  };

  const destroy = () => {
    setRobots(null);
    setDestroyed(true);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        role,
        login,
        logout,
        robots,
        setRobots,
        destroyed,
        destroy,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default UserProvider;
