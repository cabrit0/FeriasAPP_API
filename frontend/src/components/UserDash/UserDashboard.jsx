import React, { useContext } from 'react';
import CalendarComponent from '../CalendarComponent';
import SubHeader from '../SubHeader';
import Menu from '../Menu';
import FaltaDashBoard from '../FaltasDash';
import VerFaltasDash from '../VerFaltasDash';
import Informacao from '../Informacao';

import { UserContext } from '../../context/UserContext';

import { Box, Grid, GridItem, Center } from '@chakra-ui/react';

const UserDashboard = () => {
  const userCtx = useContext(UserContext);

  return (
    <Box verticalAlign={'top'}>
      <Box
        p={3}
        borderRadius={'lg'}
        height={'580px'}
        w={'100%'}
        bgColor={'#21AB4d'}
      >
        <Grid h="100%" templateRows="1fr 4fr" templateColumns="1fr" gap={1}>
          <GridItem rowSpan={1} p={4}>
            <SubHeader />
          </GridItem>
          <GridItem rowSpan={4} p={3}>
            <Grid h="100%" templateColumns="1fr 2fr" gap={2}>
              <GridItem colSpan={1} p={3}>
                <Center>
                  <Menu />
                </Center>
              </GridItem>
              <Center>
                {(!userCtx.isVerFaltas && !userCtx.isVerInformacao) && (
                  <GridItem colSpan={1} px={3}>
                    <CalendarComponent />
                  </GridItem>
                )}
                {userCtx.isCreatingFalta && (
                  <GridItem colSpan={1} px={3}>
                    <FaltaDashBoard />
                  </GridItem>
                )}
                {userCtx.isVerFaltas && (
                  <GridItem>
                    <VerFaltasDash />
                  </GridItem>
                )}
                {userCtx.isVerInformacao && (
                  <GridItem>
                    <Informacao />
                  </GridItem>
                )}
              </Center>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserDashboard;
