import React from 'react';
import RHDashboard from '../components/RHDash/RHDashboard';
import Footer from '../components/Footer';

import Header from '../components/UserDash/Header';

import { Grid, GridItem } from '@chakra-ui/react';

const RH = () => {
  return (
    <Grid h="100%" templateRows="1fr 8fr 1fr" templateColumns="1fr" gap={6}>
      <GridItem rowSpan={1}>
        <Header />
      </GridItem>
      <GridItem rowSpan={8}>
        <RHDashboard />
      </GridItem>
      <GridItem rowSpan={1}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default RH;
