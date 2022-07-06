import React, { useState, useContext } from 'react';
import UserFinder from '../api/UserFinder';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import {
  Box,
  Center,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

const Dashboard = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState(false);
  const [loginForm, setLoginForm] = useState(false);

  const [adminPassword, setAdminPassword] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleShowLogin = () => {
    setRegisterForm(false);
    setLoginForm(prev => !prev);
  };

  const handleShowRegister = () => {
    setLoginForm(false);
    setRegisterForm(prev => !prev);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await UserFinder.post('/login', { email, password });
      const role = response.data.role;
      //console.log(role);
      userCtx.setUserInfo(response.data);
      if (role === 'trabalhador') navigate(`/user/trabalhador`);
      if (role === 'chefia') navigate(`/user/chefia`);
      if (role === 'RH') navigate(`/user/RH`);
    } catch (error) {
      console.log(error);
    }
    setEmail('');
    setPassword('');
  };

  const handleAdminPass = e => {
    e.preventDefault();

    const passwordAdmin = '@3m!n';
    //let isAdmin = false;

    if (adminPassword === passwordAdmin) {
      console.log('passei');
      //isAdmin = true;
    } else {
      console.log('password incorrecta');
      //isAdmin = false;
    }
  };

  return (
    <Center>
      <Box p={5} borderRadius={'lg'} h={'lg'} w={'80vw'} bgColor={'#21AB4d'}>
        <Text
          as="h1"
          fontSize={'2xl'}
          //fontWeight={'bold'}
          align={'center'}
          color={'#EFFFF4'}
          paddingY={3}
        >
          Bem vindo! App para dispensa de ferias de trabalhadores
        </Text>
        <Flex justify="center" paddingY={4}>
          <Button
            color={'#EFFFF4'}
            colorScheme={'#21AB4d'}
            variant="outline"
            padding={6}
            marginRight={4}
            onClick={handleShowRegister}
          >
            Regista uma conta
          </Button>
          <Button
            color={'#EFFFF4'}
            colorScheme={'#21AB4d'}
            variant="outline"
            padding={6}
            onClick={handleShowLogin}
          >
            Entra com a tua conta
          </Button>
        </Flex>

        {registerForm && (
          <Box p={3} marginTop={4}>
            <form>
              <Center>
                <FormControl paddingBottom={6} maxWidth={'lg'}>
                  <Center>
                    <FormLabel color={'#EFFFF4'}>Digite senha Admin</FormLabel>
                  </Center>
                  <Input
                    type="password"
                    id="adminPass"
                    value={adminPassword}
                    onChange={e => setAdminPassword(e.target.value)}
                  />
                </FormControl>
              </Center>
              <Center>
                <Button type="submit" onClick={handleAdminPass}>
                  Enviar
                </Button>
              </Center>
            </form>
          </Box>
        )}

        {loginForm && (
          <Box p={3} marginTop={4}>
            <form>
              <Center>
                <FormControl maxW={'lg'}>
                  <Center>
                    <FormLabel color={'#EFFFF4'} htmlFor="email">
                      Email
                    </FormLabel>
                  </Center>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </FormControl>
              </Center>
              <Center>
                <FormControl paddingBottom={6} maxW={'lg'}>
                  <Center>
                    <FormLabel color={'#EFFFF4'} htmlFor="password">
                      Password
                    </FormLabel>
                  </Center>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </FormControl>
              </Center>
              <Center>
                <Button type="form" onClick={handleSubmit}>
                  Enviar
                </Button>
              </Center>
            </form>
          </Box>
        )}
      </Box>
    </Center>
  );
};

export default Dashboard;
