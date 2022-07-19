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
    //console.log(falta.ferias.dias[0][1]);

    function convertDate(inputFormat) {
      function pad(s) {
        return s < 10 ? '0' + s : s;
      }
      var d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(
        '-'
      );
    }
    const first = convertDate(falta.ferias.dias[0][0]);
    const second = convertDate(falta.ferias.dias[0][1]);
    console.log(falta.ferias.horas[0][0]);

    return (
      falta && (
        <Tr key={falta}>
          <Td>{falta.sectionOfWork}</Td>
          <Td>{first + ' até ' + second}</Td>
          <Td>{`${falta.ferias.horas[0][0]}h até ${falta.ferias.horas[0][1]}h`}</Td>
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
        width="1050px"
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
