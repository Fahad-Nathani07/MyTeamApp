import React, { createContext, useState } from 'react';

// 1. Create Context
export const UserContext = createContext();

// 2. Create Provider
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => [...prev, { ...user, id: prev.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
  setUsers((prevUsers) =>
    prevUsers.map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    )
  );
};


  return (
    <UserContext.Provider value={{ users, addUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
