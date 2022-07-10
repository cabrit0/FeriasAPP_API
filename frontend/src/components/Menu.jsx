import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

import { Box, List, ListItem } from '@chakra-ui/react';

//fazer roteamento ReactRouter
const Menu = () => {
  const navigate = useNavigate();

  const userCtx = useContext(UserContext);
  const role = userCtx.userInfo.role;
  console.log(userCtx);

  const criarFalta = () => {
    userCtx.setIsVerFaltas(false);
    userCtx.setIsVerInformacao(false);
    userCtx.setIsProcurarUser(false);
    userCtx.setIsCreatingFalta(true);
  };

  const verFaltas = () => {
    userCtx.setIsCreatingFalta(false);
    userCtx.setIsVerInformacao(false);
    userCtx.setIsProcurarUser(false);
    userCtx.setIsVerFaltas(true);
  };

  const VerInformacao = () => {
    userCtx.setIsCreatingFalta(false);
    userCtx.setIsVerFaltas(false);
    userCtx.setIsProcurarUser(false);
    userCtx.setIsVerInformacao(true);
  };

  const procurarUser = () => {
    userCtx.setIsCreatingFalta(false);
    userCtx.setIsVerFaltas(false);
    userCtx.setIsVerInformacao(false);
    userCtx.setIsProcurarUser(true);
  };

  const logOut = () => {
    userCtx.setUserInfo([]);
    navigate(`/`);
  };

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
            <Box as="button" onClick={procurarUser}>
              Procurar User
            </Box>
          </ListItem>
        )}
        <ListItem p={3}>
          <Box as="button" onClick={verFaltas}>
            Ver Minhas Faltas
          </Box>
        </ListItem>
        <ListItem p={3}>
          <Box as="button" onClick={VerInformacao}>
            Informações
          </Box>
        </ListItem>
        <ListItem p={3}>
          <Box as="button" onClick={logOut}>
            Logout
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default Menu;
