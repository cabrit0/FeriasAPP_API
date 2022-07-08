import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

import { Flex, Text } from '@chakra-ui/react';
import { BsSun } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';

const Nav = () => {
  const { weatherInfo } = useContext(WeatherContext);
  //console.log(weatherInfo);

  //const { userInfo } = useContext(UserContext);
  //console.log(userInfo.role)
  return (
    <Flex alignItems="center" justify="center">
      {weatherInfo.temp_c && (
        <Text
          as="h1"
          fontSize={'xl'}
          align={'center'}
          justify="center"
          color={'#EFFFF4'}
          mx={8}
        >
          TEMP:  {weatherInfo.temp_c}ºC
        </Text>
      )}
      <Text as="h1" fontSize={'xl'} align={'center'} color={'#EFFFF4'} mx={8}>
        {weatherInfo.is_day === 1 ? <BsSun /> : <FaMoon />}
      </Text>
      {weatherInfo.wind_mph && (
        <Text as="h1" fontSize={'xl'} align={'center'} color={'#EFFFF4'} mx={8}>
          VENTO: {weatherInfo.wind_mph} mph
        </Text>
      )}
    </Flex>
  );
};

export default Nav;
