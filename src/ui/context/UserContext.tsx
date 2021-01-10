import React, { createContext, useContext, useState } from 'react';
import State from '../../core/models/State';
import User from '../../core/models/User';

const UserContext: React.Context<State<User>> = createContext<State<User>>({
  data: undefined,
  setData: (value: User) => null,
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

  return {
    user: data,
    setUser: setData,
  };
}

export default UserProvider;
