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
  const feriasCtx = Object.entries(userCtx.userInfo.ferias);
  //console.log(feriasCtx);

  const feriasUserRender = feriasCtx.map(ferias => {
    //console.log(ferias);
    function convertDate(inputFormat) {
      function pad(s) {
        return s < 10 ? '0' + s : s;
      }
      var d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(
        '-'
      );
    }
    const first = convertDate(ferias[1].dias[0][0]);
    const second = convertDate(ferias[1].dias[0][1]);

    return (
      <Tr key={ferias}>
        <Td>{first + ' até ' + second}</Td>
        <Td>{`${ferias[1].horas[0][0]}h até ${ferias[1].horas[0][1]}h`}</Td>
        <Td>{ferias[1].modo}</Td>
        <Td>{ferias[1].tipoFerias}</Td>
        <Td>{ferias[1].totalHorasFerias}h</Td>
      </Tr>
    );
  });

  const sairVerFaltas = () => {
    userCtx.setIsVerFaltas(false);
  };
  return (
    <Box>
      <TableContainer
        height="400px "
        width="880px"
        color={'#aeaeae'}
        bg="#191B18"
        borderRadius="lg"
        overflowY="scroll"
        p={5}
      >
        <Table variant="simple">
          <TableCaption>AS MINHAS FALTAS ATÉ AGORA</TableCaption>
          <Thead>
            <Tr>
              <Th>Dias</Th>
              <Th>Horas</Th>
              <Th>Modo</Th>
              <Th>Tipo</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>{feriasUserRender}</Tbody>
        </Table>
        <Button onClick={sairVerFaltas} align="rigth" m={1}>
          Sair
        </Button>
      </TableContainer>
    </Box>
  );
};

export default VerFaltasDash;
