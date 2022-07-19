import React, { useState, useEffect } from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

const Header = () => {
  const getCurrentDate = () => {
    let date = new Date();
    let dateStr =
      ('00' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      ('00' + date.getDate()).slice(-2) +
      '/' +
      date.getFullYear() +
      `\n` +
      ('00' + date.getHours()).slice(-2) +
      ':' +
      ('00' + date.getMinutes()).slice(-2) +
      ':' +
      ('00' + date.getSeconds()).slice(-2);
    return dateStr;
  };
  const [actualDate, setActualDate] = useState(getCurrentDate());

  useEffect(() => {
    const timer = setTimeout(() => {
      setActualDate(getCurrentDate());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Center>
      <Box p={2} borderRadius={'lg'} w={'80vw'} bgColor={'#21AB4d'}>
        <Text
          as="h1"
          fontSize={'4xl'}
          fontWeight={'bold'}
          align={'center'}
          color={'#EFFFF4'}
        >
          DINEF3RIAS APP
        </Text>
        <Text as="h1" align={'center'} color={'#EFFFF4'}>
          {actualDate}
        </Text>
      </Box>
    </Center>
  );
};
//768
export default Header;
