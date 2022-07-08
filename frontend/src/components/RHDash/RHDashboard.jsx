import React from 'react';
import SubHeader from '../SubHeader';
import CalendarComponent from '../CalendarComponent';
import Menu from '../Menu';

import { Box, Grid, GridItem, Center } from '@chakra-ui/react';

const RHDashboard = () => {
  return (
    <Center>
      <Box
        p={3}
        borderRadius={'lg'}
        height={'580px'}
        w={'100%'}
        bgColor={'#21AB4d'}
      >
        <Grid h="100%" templateRows="1fr 4fr" templateColumns="1fr" gap={2}>
          <GridItem rowSpan={1} p={4}>
            <SubHeader />
          </GridItem>
          <GridItem rowSpan={4} p={4}>
            <Grid h="100%" templateColumns="1fr 2fr" gap={2}>
              <GridItem colSpan={1} p={3}>
                <Center>
                  <Menu />
                </Center>
              </GridItem>
              <Center>
                <GridItem colSpan={1} px={4}>
                  <CalendarComponent />
                </GridItem>
              </Center>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Center>
  );
};

export default RHDashboard;
