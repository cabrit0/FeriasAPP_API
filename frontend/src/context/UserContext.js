import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = props => {
  const [userInfo, setUserInfo] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const showUser = (user) => setUserInfo([...userInfo, user]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {props.children}
    </UserContext.Provider>
  );
};
