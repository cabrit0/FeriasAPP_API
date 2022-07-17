import React from 'react';
//import { UserContext } from '../context/UserContext';
//import { useNavigate } from 'react-router-dom';

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

const UserFaltasDetail = props => {
  //const navigate = useNavigate();

  //const userCtx = useContext(UserContext);

  //userCtx.setIsProcurarUser(false);

  /* const sairVerFaltasList = () => {
    navigate(-1);
  }; */

  console.log(props);

  //console.log(props.faltasList.ferias.horas);
  const faltasListUser = props.faltasList.map(falta => {
    console.log(falta);
    return (
      falta && (
        <Tr key={falta}>
          <Td>{falta.sectionOfWork}</Td>
          <Td>{falta.ferias.dias}</Td>
          <Td>{falta.ferias.horas}</Td>
          <Td>{falta.ferias.modo}</Td>
          <Td>{falta.ferias.tipoFerias}</Td>
          <Td>{falta.ferias.chefiaAprove}</Td>
          <Td>{falta.ferias.RHAprove}</Td>
        </Tr>
      )
    );
  });
  return (
    <Box>
      <TableContainer
        height="400px "
        width="1000px"
        color={'#aeaeae'}
        bg="#191B18"
        borderRadius="lg"
        overflowY="scroll"
        p={5}
      >
        <Table variant="simple">
          <TableCaption>Faltas de {props.faltasList[0].name}</TableCaption>
          <Thead>
            <Tr>
              <Th>Secção</Th>
              <Th>Dias</Th>
              <Th>Horas</Th>
              <Th>Modo</Th>
              <Th>Tipo</Th>
              <Th>Chefia</Th>
              <Th>RH</Th>
            </Tr>
          </Thead>
          <Tbody>{faltasListUser}</Tbody>
        </Table>
        <Button onClick={props.sairFaltasList} align="rigth" m={1}>
          Sair
        </Button>
      </TableContainer>
    </Box>
  );
};

export default UserFaltasDetail;
