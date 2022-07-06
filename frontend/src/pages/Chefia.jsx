import React from 'react';
import Header from '../components/ChefiaDash/Header';
import ChefiaDashboard from '../components/ChefiaDash/ChefiaDashboard';
import Footer from '../components/Footer';

import { Grid, GridItem } from '@chakra-ui/react';

const Chefia = () => {
  return (
    <Grid h="100%" templateRows="1fr 8fr 1fr" templateColumns="1fr" gap={6}>
      <GridItem rowSpan={1}>
        <Header />
      </GridItem>
      <GridItem rowSpan={8}>
        <ChefiaDashboard />
      </GridItem>
      <GridItem rowSpan={1}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Chefia;
