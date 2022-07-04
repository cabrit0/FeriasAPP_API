import React, { useState } from 'react';

import {
  Box,
  Center,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const Dashboard = () => {
  const [registerForm, setRegisterForm] = useState(false);
  const [loginForm, setLoginForm] = useState(false);

  const handleShowLogin = () => {
    setRegisterForm(false);
    setLoginForm(prev => !prev);
  };

  const handleShowRegister = () => {
    //const passwordAdmin = '@3m!n';
    setLoginForm(false);
    setRegisterForm(prev => !prev);
  };

  return (
    <Center>
      <Box p={2} borderRadius={'lg'} h={'65vh'} w={'80vw'} bgColor={'#21AB4d'}>
        <Flex justify="center">
          <Button
            verticalAlign="center"
            color={'#EFFFF4'}
            colorScheme={'#21AB4d'}
            variant="outline"
            marginRight={3}
            marginTop={10}
            onClick={handleShowRegister}
          >
            Regista uma conta
          </Button>
          <Button
            verticalAlign="center"
            color={'#EFFFF4'}
            colorScheme={'#21AB4d'}
            variant="outline"
            marginTop={10}
            onClick={handleShowLogin}
          >
            Entra com a tua conta
          </Button>
        </Flex>

        {registerForm && (
          <Box p={3} marginTop={4}>
            <form>
              <FormControl>
                <Center>
                  <FormLabel color={'#EFFFF4'}>Digite senha Admin</FormLabel>
                </Center>
                <Input type="password" />
              </FormControl>
            </form>
          </Box>
        )}

        {loginForm && (
          <Box p={3} marginTop={4}>
            <form>
              <FormControl>
                <Center>
                  <FormLabel color={'#EFFFF4'} htmlFor="email">
                    Email
                  </FormLabel>
                </Center>
                <Input type="email" />
              </FormControl>
              <FormControl>
                <Center>
                  <FormLabel color={'#EFFFF4'} htmlFor="password">
                    Password
                  </FormLabel>
                </Center>
                <Input type="password" />
              </FormControl>
            </form>
          </Box>
        )}
      </Box>
    </Center>
  );
};

export default Dashboard;
