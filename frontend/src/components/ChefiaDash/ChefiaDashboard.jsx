import React from 'react'
import Nav from '../NavH';

import { Box, Grid, GridItem, Center } from '@chakra-ui/react';

const ChefiaDashboard = () => {
  return (
    <Center>
      <Box
        p={3}
        borderRadius={'lg'}
        height={'580px'}
        w={'100%'}
        bgColor={'#21AB4d'}
      >
        <Grid h="100%" templateRows="1fr 4fr" templateColumns="1fr" gap={4}>
          <GridItem rowSpan={1} p={4}>
            <Nav />
          </GridItem>
          <GridItem rowSpan={4} bg="papayawhip" />
        </Grid>
      </Box>
    </Center>
  );
}

export default ChefiaDashboard