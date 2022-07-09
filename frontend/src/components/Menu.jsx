import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import { Box, List, ListItem } from '@chakra-ui/react';

//fazer roteamento ReactRouter
const Menu = () => {
  const userCtx = useContext(UserContext);
  const role = userCtx.userInfo.role;
  console.log(userCtx);

  const criarFalta = () => {
    userCtx.setIsVerFaltas(false);
    userCtx.setIsCreatingFalta(true);
    console.log(userCtx);
  };

  const verFaltas = () =>{
    userCtx.setIsCreatingFalta(false)
    userCtx.setIsVerFaltas(true)
  }

  return (
    <Box w="300px">
      <List color={'#aeaeae'} bg="#191B18" borderRadius="lg" p={5}>
        <ListItem p={3}>
          <Box as="button" onClick={criarFalta}>
            Criar Falta
          </Box>
        </ListItem>
        {role === 'RH' && (
          <ListItem p={3}>
            <Box as="button">Criar User</Box>
          </ListItem>
        )}
        {(role === 'RH' || role === 'chefia') && (
          <ListItem p={3}>
            <Box as="button">Procurar User</Box>
          </ListItem>
        )}
        <ListItem p={3}>
          <Box as="button" onClick={verFaltas}>Ver Minhas Faltas</Box>
        </ListItem>
        <ListItem p={3}>
          <Box as="button">Informações</Box>
        </ListItem>
        <ListItem p={3}>
          <Box as="button">Logout</Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default Menu;
