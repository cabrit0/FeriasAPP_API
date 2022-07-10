import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = props => {
  const [userInfo, setUserInfo] = useState([]);
  const [isCreatingFalta, setIsCreatingFalta] = useState(false);
  const [isVerFaltas, setIsVerFaltas] = useState(false);
  const [isVerInformacao, setIsVerInformacao] = useState(false);
  const [isProcurarUser, setIsProcurarUser] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const showUser = user => setUserInfo([...userInfo, user]);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isCreatingFalta,
        setIsCreatingFalta,
        isVerFaltas,
        setIsVerFaltas,
        isVerInformacao,
        setIsVerInformacao,
        isProcurarUser,
        setIsProcurarUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
