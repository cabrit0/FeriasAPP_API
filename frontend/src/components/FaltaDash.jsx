import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import {
  Box,
  HStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  Button,
  Flex,
} from '@chakra-ui/react';

const FaltaDash = () => {
  const userCtx = useContext(UserContext)
  const sairFaltas = () => {
    userCtx.setIsCreatingFalta(false)
  };
  return (
    <Box color={'#aeaeae'} bg="#191B18" borderRadius="lg" p={3}>
      <FormControl>
        <Box p={3}>
          <FormLabel>Tipo de Ferias</FormLabel>
          <RadioGroup defaultValue="vaiAusentarSe">
            <HStack spacing="24px">
              <Radio value="ausentouSe">Ausentou-se</Radio>
              <Radio value="vaiAusentarSe">Vai ausentar-se</Radio>
            </HStack>
          </RadioGroup>
        </Box>
        <Box p={3}>
          <FormLabel>Modo de Ferias</FormLabel>
          <RadioGroup defaultValue="normal">
            <HStack spacing="24px">
              <Radio value="normal">Normal</Radio>
              <Radio value="justificada">Justificada</Radio>
              <Radio value="compensacao">Compesação</Radio>
            </HStack>
          </RadioGroup>
        </Box>
        <Box p={3}>
          <FormLabel>Horas</FormLabel>
          <Select p={1} id="country" placeholder="Inicio">
            <option>00:00 - 00:30</option>
            <option>00:30 - 01:00</option>
            <option>01:00 - 01:30</option>
            <option>01:30 - 02:00</option>
            <option>02:00 - 02:30</option>
            <option>02:30 - 03:00</option>
            <option>03:00 - 03:30</option>
            <option>03:30 - 04:00</option>
            <option>04:00 - 04:30</option>
            <option>04:30 - 05:00</option>
            <option>05:00 - 05:30</option>
            <option>05:30 - 06:00</option>
            <option>06:00 - 06:30</option>
            <option>06:30 - 07:00</option>
            <option>07:00 - 07:30</option>
            <option>07:30 - 08:00</option>
            <option>08:00 - 08:30</option>
            <option>08:30 - 09:00</option>
            <option>09:00 - 09:30</option>
            <option>09:30 - 10:00</option>
            <option>10:00 - 10:30</option>
            <option>10:30 - 11:00</option>
            <option>11:00 - 11:30</option>
            <option>11:30 - 12:00</option>
            <option>12:00 - 12:30</option>
            <option>12:30 - 13:00</option>
            <option>13:00 - 13:30</option>
            <option>13:30 - 14:00</option>
            <option>14:00 - 14:30</option>
            <option>14:30 - 15:00</option>
            <option>15:00 - 15:30</option>
            <option>15:30 - 16:00</option>
            <option>16:00 - 16:30</option>
            <option>16:30 - 17:00</option>
            <option>17:00 - 17:30</option>
            <option>17:30 - 18:00</option>
            <option>18:00 - 18:30</option>
            <option>18:30 - 19:00</option>
            <option>19:00 - 19:30</option>
            <option>19:30 - 20:00</option>
            <option>20:00 - 20:30</option>
            <option>20:30 - 21:00</option>
            <option>21:00 - 21:30</option>
            <option>21:30 - 22:00</option>
            <option>22:00 - 22:30</option>
            <option>22:30 - 23:00</option>
            <option>23:00 - 23:30</option>
            <option>23:30 - 24:00</option>
          </Select>
          <Select p={1} id="country" placeholder="Fim">
            <option>00:00 - 00:30</option>
            <option>00:30 - 01:00</option>
            <option>01:00 - 01:30</option>
            <option>01:30 - 02:00</option>
            <option>02:00 - 02:30</option>
            <option>02:30 - 03:00</option>
            <option>03:00 - 03:30</option>
            <option>03:30 - 04:00</option>
            <option>04:00 - 04:30</option>
            <option>04:30 - 05:00</option>
            <option>05:00 - 05:30</option>
            <option>05:30 - 06:00</option>
            <option>06:00 - 06:30</option>
            <option>06:30 - 07:00</option>
            <option>07:00 - 07:30</option>
            <option>07:30 - 08:00</option>
            <option>08:00 - 08:30</option>
            <option>08:30 - 09:00</option>
            <option>09:00 - 09:30</option>
            <option>09:30 - 10:00</option>
            <option>10:00 - 10:30</option>
            <option>10:30 - 11:00</option>
            <option>11:00 - 11:30</option>
            <option>11:30 - 12:00</option>
            <option>12:00 - 12:30</option>
            <option>12:30 - 13:00</option>
            <option>13:00 - 13:30</option>
            <option>13:30 - 14:00</option>
            <option>14:00 - 14:30</option>
            <option>14:30 - 15:00</option>
            <option>15:00 - 15:30</option>
            <option>15:30 - 16:00</option>
            <option>16:00 - 16:30</option>
            <option>16:30 - 17:00</option>
            <option>17:00 - 17:30</option>
            <option>17:30 - 18:00</option>
            <option>18:00 - 18:30</option>
            <option>18:30 - 19:00</option>
            <option>19:00 - 19:30</option>
            <option>19:30 - 20:00</option>
            <option>20:00 - 20:30</option>
            <option>20:30 - 21:00</option>
            <option>21:00 - 21:30</option>
            <option>21:30 - 22:00</option>
            <option>22:00 - 22:30</option>
            <option>22:30 - 23:00</option>
            <option>23:00 - 23:30</option>
            <option>23:30 - 24:00</option>
          </Select>
        </Box>
        <Flex>
          <Box p={3}>
            <Button>Guardar</Button>
          </Box>
          <Box p={3}>
            <Button onClick={sairFaltas}>Sair</Button>
          </Box>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default FaltaDash;
