import React from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

import { Box, Center } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      <Center p={4}>
        <Header />
      </Center>
      <Center p={4}>
        <Dashboard />
      </Center>
      <Center p={4}>
        <Footer />
      </Center>
    </Box>
  );
};

export default Home;
