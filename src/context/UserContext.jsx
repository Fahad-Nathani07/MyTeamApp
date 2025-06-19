import React, { createContext, useState } from 'react';

// 1. Create Context
export const UserContext = createContext();

// 2. Create Provider
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => [...prev, { ...user, id: prev.length + 1 }]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
