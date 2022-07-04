import React from 'react';
import { Box, Center, Flex, Button } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Center>
      <Box p={2} borderRadius={'lg'} h={'65vh'} w={'80vw'} bgColor={'#21AB4d'}>
    
          <Flex justify='center'>
            <Button
              verticalAlign="center"
              color={'#EFFFF4'}
              colorScheme={'#21AB4d'}
              variant="outline"
              marginRight={3}
              marginTop={10}
            >
              Regista uma conta
            </Button>
            <Button
              verticalAlign="center"
              color={'#EFFFF4'}
              colorScheme={'#21AB4d'}
              variant="outline"
              marginTop={10}
            >
              Entra com a tua conta
            </Button>
          </Flex>
        
      </Box>
    </Center>
  );
};

export default Dashboard;
