import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react';

const Header = () => {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);
  const getCurrentDate = () => {
    let date = new Date();
    let dateStr =
      ('00' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      ('00' + date.getDate()).slice(-2) +
      '/' +
      date.getFullYear() +
      `\n-\n` +
      ('00' + date.getHours()).slice(-2) +
      ':' +
      ('00' + date.getMinutes()).slice(-2);
    return dateStr;
  };
  return (
    <Center>
      <Box p={2} borderRadius={'lg'} w={'80vw'} bgColor={'#21AB4d'}>
        <Flex>
          <Box>
            <Text
              as="h1"
              fontSize={'3xl'}
              fontWeight={'bold'}
              align={'center'}
              color={'#EFFFF4'}
            >
              FERIAS APP
            </Text>
            <Text as="h1" align={'center'} color={'#EFFFF4'}>
              {getCurrentDate()}
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Center>
              <Text as="h1" fontSize={'xl'} align={'center'} color={'#EFFFF4'}>
                Bem vindo, <Text fontWeight={'bold'}>{userInfo.name}</Text>
              </Text>
            </Center>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

export default Header;
