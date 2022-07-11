import React, { useContext } from 'react';
import SubHeader from '../SubHeader';
import CalendarComponent from '../CalendarComponent';
import Menu from '../Menu';
import FaltaDashBoard from '../FaltaDash';
import VerFaltasDash from '../VerFaltasDash';
import Informacao from '../Informacao';
import ProcurarUserDash from '../ProcurarUserDash';

import { UserContext } from '../../context/UserContext';

import { Box, Grid, GridItem, Center } from '@chakra-ui/react';
import CriarUser from './CriarUser';

const RHDashboard = () => {
  const userCtx = useContext(UserContext);

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
                {!userCtx.isCreatingUser &&
                  !userCtx.isVerFaltas &&
                  !userCtx.isVerInformacao &&
                  !userCtx.isProcurarUser && (
                    <GridItem colSpan={1} px={3}>
                      <CalendarComponent />
                    </GridItem>
                  )}
                {userCtx.isCreatingUser && (
                  <GridItem colSpan={1} px={3}>
                    <CriarUser />
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
                {userCtx.isProcurarUser && (
                  <GridItem>
                    <ProcurarUserDash />
                  </GridItem>
                )}
              </Center>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Center>
  );
};

export default RHDashboard;
