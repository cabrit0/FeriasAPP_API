import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import {
  Box,
  Text,
  Grid,
  GridItem,
  Center,
  HStack,
  Button,
} from '@chakra-ui/react';

function Informacao() {
  const userCtx = useContext(UserContext);

  const goToFerias = () => {
    userCtx.setIsCreatingFalta(false);
    userCtx.setIsVerInformacao(false);
    userCtx.setIsVerFaltas(true);
  };
  return (
    <Box
      height="400px "
      width="800px"
      color={'#aeaeae'}
      bg="#191B18"
      borderRadius="lg"
      p={5}
    >
      <Grid h="100%" templateRows="1fr 4fr" templateColumns="1fr" gap={1}>
        <GridItem>
          <Center>
            <Text
              as="h1"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#EFFFF4'}
              mx={8}
            >
              AS MINHAS INFORMAÇÕES
            </Text>
          </Center>
        </GridItem>
        <GridItem>
          <HStack justify="center">
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#EFFFF4'}
            >
              Nome :
            </Text>
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#eafff1aa'}
            >
              {userCtx.userInfo.name}
            </Text>
          </HStack>
          <HStack justify="center">
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#EFFFF4'}
            >
              Email :
            </Text>
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#eafff1aa'}
            >
              {userCtx.userInfo.email}
            </Text>
          </HStack>
          <HStack justify="center">
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#EFFFF4'}
            >
              Função :
            </Text>
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#eafff1aa'}
            >
              {userCtx.userInfo.role}
            </Text>
          </HStack>
          <HStack justify="center">
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#EFFFF4'}
            >
              Nº trabalhador :
            </Text>
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#eafff1aa'}
            >
              {userCtx.userInfo.workerNumber}
            </Text>
          </HStack>
          <HStack justify="center">
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#EFFFF4'}
            >
              Secção de trabalho :
            </Text>
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#eafff1aa'}
            >
              {userCtx.userInfo.sectionOfWork}
            </Text>
          </HStack>
          <HStack justify="center">
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#EFFFF4'}
            >
              Chefia :
            </Text>
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#eafff1aa'}
            >
              {userCtx.userInfo.chefia}
            </Text>
          </HStack>
          <HStack justify="center">
            <Text
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#EFFFF4'}
            >
              Férias :
            </Text>
            <Button
              as="h3"
              fontSize={'xl'}
              align={'center'}
              justify="center"
              color={'#eafff1aa'}
              outline="none"
              bg={'none'}
              variant="link"
              onClick={goToFerias}
            >
              Ir para Ver Férias
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Informacao;
