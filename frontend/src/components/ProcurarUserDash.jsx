import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import UserFinder from '../api/UserFinder';
import FeriasFinder from '../api/FeriasFinder';
import UserFaltasDetail from './UserFaltasDetail';

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

const ProcurarUserDash = () => {
  const userCtx = useContext(UserContext);
  const [userList, setUserList] = useState([]);
  const [userFaltasList, setUserFaltasList] = useState([]);
  
  const handleClidedMenu = () => {
    userCtx.setHasLeftUser(false);
    userCtx.setHasClickedUser(true);
    console.log(userCtx.hasClickedUser);
  };

  const getUsersData = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${userCtx.userInfo.token}` },
      };

      const response = await UserFinder.get('/', config);
      const data = response.data.data;
      setUserList(Object.entries(data));
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(userList);

  useEffect(() => {
    getUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const procurarUserRender = userList.map(users => {
    return (
      <Tr onClick={() => handleUserSelect(users[1].workerNumber)} key={users}>
        <Td>{users[1].name}</Td>
        <Td>{users[1].sectionOfWork}</Td>
        <Td>{users[1].role}</Td>
        <Td>{users[1].workerNumber}</Td>
      </Tr>
    );
  });

  const handleUserSelect = async workN => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userCtx.userInfo.token}`,
          'content-type': 'application/x-www-form-urlencoded',
          data: workN,
        },
      };
      const response = await FeriasFinder.get('/', config /* bodyConfig */);
      const data = response.data.data;

      const getFilteredUserFaltas = data.filter(
        user => user.workerNumber === workN
      );
      setUserFaltasList(getFilteredUserFaltas);
      console.log(getFilteredUserFaltas);
    } catch (error) {
      console.log(error);
    }
    handleClidedMenu();
  };

  const sairProcurarUser = () => {
    userCtx.setIsProcurarUser(false);
  };
  return ( userCtx.hasClickedUser ? <UserFaltasDetail faltasList={userFaltasList} /> :
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
          <TableCaption>Meus Utilizadores</TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Secção</Th>
              <Th>Colaborador</Th>
              <Th>Nº Trabalhador</Th>
            </Tr>
          </Thead>
          <Tbody>
           {procurarUserRender}
          </Tbody>
        </Table>
        <Button onClick={sairProcurarUser} align="rigth" m={1}>
          Sair
        </Button>
      </TableContainer>
    </Box>
  );
};

export default ProcurarUserDash;
