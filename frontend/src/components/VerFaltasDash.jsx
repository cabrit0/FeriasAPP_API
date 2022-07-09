import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react';

const VerFaltasDash = () => {
  const userCtx = useContext(UserContext);
  const sairVerFaltas = () => {
    userCtx.setIsVerFaltas(false);
  };
  return (
    <Box>
      <TableContainer
        height="400px "
        width="800px"
        color={'#aeaeae'}
        bg="#191B18"
        borderRadius="lg"
        p={5}
      >
        <Table variant="simple">
          <TableCaption>AS MINHAS FALTAS ATÉ AGORA</TableCaption>
          <Thead>
            <Tr>
              <Th>Dia(as)</Th>
              <Th>Horas</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>12/05/2022</Td>
              <Td>08:00 - 12:30</Td>
              <Td> 4:30h</Td>
            </Tr>
            <Tr>
              <Td>13/05/2022</Td>
              <Td>08:00 - 12:30</Td>
              <Td> 4:30h </Td>
            </Tr>
            <Tr>
              <Td>14/05/2022</Td>
              <Td>08:00 - 12:30</Td>
              <Td> 4:30h</Td>
            </Tr>
          </Tbody>
        </Table>
        <Button align="rigth" m={1}>
          Seguinte
        </Button>
        <Button onClick={sairVerFaltas} align="rigth" m={1}>
          Sair
        </Button>
      </TableContainer>
    </Box>
  );
};

export default VerFaltasDash;
