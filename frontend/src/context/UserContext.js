import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = props => {
  const [userInfo, setUserInfo] = useState([]);
  const [feriasInfo, setFeriasInfo] = useState([]);
  const [feriasCalendar, setFeriasCalendar] = useState(new Date());
  const [ferias, setFerias] = useState('');
  const [horasDiff, setHorasDiff] = useState('');
  const [isCreatingFalta, setIsCreatingFalta] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
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
        feriasInfo,
        setFeriasInfo,
        isCreatingFalta,
        setIsCreatingFalta,
        isCreatingUser,
        setIsCreatingUser,
        isVerFaltas,
        setIsVerFaltas,
        isVerInformacao,
        setIsVerInformacao,
        isProcurarUser,
        setIsProcurarUser,
        ferias,
        setFerias,
        feriasCalendar,
        setFeriasCalendar,
        horasDiff,
        setHorasDiff,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
