import React from 'react';

import { Box, Flex, Button, Center } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Flex alignItems="center" justify="center">
      <Button>Criar Falta</Button>
      <Button>Ver Faltas</Button>
      <Button>Informação User</Button>
      <Button>Logout</Button>
    </Flex>
  );
};

export default Nav;
