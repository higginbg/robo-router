import { createContext, FC, useState } from 'react';

import { Role } from '../models/roles';

interface AppStore {
  isLoggedIn: boolean;
  role: '' | Role;
  login: (role: Role) => void;
  logout: () => void;
}

export const AppContext = createContext<AppStore>({
  isLoggedIn: false,
  role: '' as '' | Role,
  login: () => {},
  logout: () => {},
});

const UserProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('' as '' | Role);

  const login = (role: Role) => {
    setRole(role);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setRole('');
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        role,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default UserProvider;
