import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import { Box, List, ListItem } from '@chakra-ui/react';

//fazer roteamento ReactRouter
const Menu = () => {
  const userCtx = useContext(UserContext);
  const role = userCtx.userInfo.role;
  return (
    <Box w="300px">
      <List color={'#aeaeae'} bg="#191B18" borderRadius="lg" p={5}>
        <ListItem p={3}>
          <a href="/">Criar Falta</a>
        </ListItem>
        {(role === 'RH') && (
          <ListItem p={3}>
            <a href="/">Criar User</a>
          </ListItem>
            )}
        {(role === 'RH' || role === 'chefia') && (
          <ListItem p={3}>
            <a href="/">Procurar User</a>
          </ListItem>
        )}
        <ListItem p={3}>
          <a href="/">Ver Minhas Faltas</a>
        </ListItem>
        <ListItem p={3}>
          <a href="/">Informações</a>
        </ListItem>
        <ListItem p={3}>
          <a href="/">Logout</a>
        </ListItem>
      </List>
    </Box>
  );
};

export default Menu;
