import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import { Flex, Button } from '@chakra-ui/react';
//layout lateral para chefes e RH? mobile tem que ser
const Nav = () => {
  const {userInfo} = useContext(UserContext);
  console.log(userInfo.role)
  return (
    <Flex alignItems="center" justify="center">
      <Button mx={3}>Criar Falta</Button>
      <Button mx={3}>Ver Faltas</Button>
      <Button mx={3}>Informações</Button>
      {userInfo.role === 'RH' && <Button mx={3}>Trabalhadores</Button>}
      {userInfo.role === 'RH' && <Button mx={3}>Criar User</Button>}
      <Button mx={3}>Logout</Button>
    </Flex>
  );
};

export default Nav;
