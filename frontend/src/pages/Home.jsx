import React from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

import { Grid, GridItem } from '@chakra-ui/react';

const Home = () => {
  return (
    <Grid h="100%" columns="1fr" templateRows="1fr 3fr 1fr" gap={5}>
      <GridItem w="100%" h="100%">
        <Header />
      </GridItem>
      <GridItem w="100%" h="100%">
        <Dashboard />
      </GridItem>
      <GridItem w="100%" h="100%" paddingTop={10}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Home;

