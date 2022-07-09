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
        width="680px"
        color={'#aeaeae'}
        bg="#191B18"
        borderRadius="lg"
        p={5}
      >
        <Table variant="simple">
          <TableCaption>AS MINHAS FALTAS ATÉ AGORA</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
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
