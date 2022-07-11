import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import UserFinder from '../../api/UserFinder';

import {
  Box,
  HStack,
  FormControl,
  FormLabel,
  Select,
  Button,
  Input,
} from '@chakra-ui/react';

const CriarUser = () => {
  const userCtx = useContext(UserContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [chefia, setChefia] = useState('');
  const [numero, setNumero] = useState('');
  const [tipoConta, setTipoConta] = useState('');
  const [seccao, setSeccao] = useState('');
  console.log(userCtx);

  const handleSubmit = async e => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${userCtx.userInfo.token}` },
      };
      const bodyParameters = {
        name: name,
        email: email,
        password: password,
        workerNumber: numero,
        sectionOfWork: seccao,
        role: tipoConta,
        chefia: chefia,
      };

      const response = await UserFinder.post('/', bodyParameters);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    userCtx.setIsCreatingUser(false);
  };

  const sairCriarUser = () => {
    userCtx.setIsCreatingUser(false);
  };

  return (
    <Box
      height="400px "
      width="880px"
      color={'#aeaeae'}
      bg="#191B18"
      borderRadius="lg"
      p={5}
    >
      <FormControl>
        <HStack justify="center">
          <Box w="280px">
            <Box py={2} px={3}>
              <FormLabel>Nome</FormLabel>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                id="name"
                h="34px"
              />
            </Box>
            <Box py={2} px={3}>
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                id="email"
                h="34px"
              />
            </Box>
          </Box>
          <Box w="280px">
            <Box py={2} px={3}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                id="password"
                h="34px"
              />
            </Box>
            <Box py={2} px={3}>
              <FormLabel>Chefia</FormLabel>
              <Input
                value={chefia}
                onChange={e => setChefia(e.target.value)}
                id="chefia"
                h="34px"
              />
            </Box>
          </Box>
        </HStack>
        <HStack justify="center">
          <Box py={2} px={3} w="100px">
            <FormLabel>Numero</FormLabel>
            <Input
              value={numero}
              onChange={e => setNumero(e.target.value)}
              id="numero"
              h="34px"
              type="number"
            />
          </Box>
          <Box py={2} px={3}>
            <FormLabel>Tipo de Conta</FormLabel>
            <Select
              value={tipoConta}
              onChange={e => setTipoConta(e.target.value)}
              h="34px"
              variant="outline"
              p={1}
              placeholder="Função"
            >
              <option
                value="trabalhador"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                Trabalhador
              </option>
              <option
                value="chefia"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                Chefia
              </option>
              <option
                value="RH"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                RH
              </option>
            </Select>
          </Box>
          <Box py={2} px={3}>
            <FormLabel>Secção de Trabalho</FormLabel>
            <Select
              value={seccao}
              onChange={e => setSeccao(e.target.value)}
              h="34px"
              variant="outline"
              p={1}
              placeholder="Trabalho"
            >
              <option
                value="eletrificação"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                Eletrificação
              </option>
              <option
                value="montagem"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                Montagem
              </option>
              <option
                value="pneumatica"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                Pneumática
              </option>
              <option
                value="desenho"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                Desenho
              </option>
              <option
                value="serralharia"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                Serralharia
              </option>
              <option
                value="preparacao"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                Preparação
              </option>
              <option
                value="CNC"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                CNC
              </option>
              <option
                value="fresador"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                Fresador
              </option>
              <option
                value="RH"
                style={{ background: '#191B18', color: '#aeaeae' }}
              >
                RH
              </option>
            </Select>
          </Box>
        </HStack>
        <Box justify="center" align="center">
          <Button onClick={handleSubmit} p={3} m={3}>
            Guardar
          </Button>
          <Button onClick={sairCriarUser} p={3} m={3}>
            Sair
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default CriarUser;
