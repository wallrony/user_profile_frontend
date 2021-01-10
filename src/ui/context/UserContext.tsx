import React, { createContext, useContext, useState } from 'react';
import AuthorizedUser from '../../core/models/AuhorizedUser';
import State from '../../core/models/State';
import User from '../../core/models/User';
import StorageController from '../../data/static/StorageController';

const UserContext: React.Context<State<User>> = createContext<State<User>>({
  data: undefined,
  setData: () => null,
});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  return (
    <UserContext.Provider
      value={{
        data: user,
        setData: setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if(!context) {
    throw new Error('useUser Hook can only be used inside a UserProvider.');
  }

  const { data, setData } = context;

  function changeUser(value: User | undefined) {
    if(value !== data && value === undefined) {
      StorageController.clearAll();
    }

    setData(value);
  }

  function login(value: AuthorizedUser) {
    if(value.user && value.auth_token) {
      StorageController.saveUserInfo(value.user.id, value.auth_token);
    }

    setData(value.user);
  }

  return {
    user: data,
    setUser: changeUser,
    login
  };
}

export default UserProvider;
