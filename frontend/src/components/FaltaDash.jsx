import React, { useState, useContext } from 'react';
import FeriasFinder from '../api/FeriasFinder';
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
  const userCtx = useContext(UserContext);
  const [tipoFerias, setTipoFerias] = useState('');
  const [modoFerias, setModoFerias] = useState('');
  const [horasInicio, setHorasInicio] = useState('');
  const [horasFim, setHorasFim] = useState('');

  //const test1 = userCtx.feriasCalendar[0];

  //console.log(userCtx.userInfo.token);
  const handleSubmitFaltas = async e => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${userCtx.userInfo.token}` },
      };

      const bodyParameters = {
        user: userCtx.userInfo._id,
        name: userCtx.userInfo.name,
        workerNumber: userCtx.userInfo.workerNumber,
        sectionOfWork: userCtx.userInfo.sectionOfWork,
        role: userCtx.userInfo.role,
        chefia: userCtx.userInfo.chefia,
        ferias: {
          horas: `${horasInicio}, ${horasFim}`,
          dias: `${userCtx.feriasCalendar[0]}, ${userCtx.feriasCalendar[1]}`,
          totalHorasFerias: userCtx.ferias,
        },
        horas: [horasInicio, horasFim],
        dias: [userCtx.feriasCalendar[0], userCtx.feriasCalendar[1]],
        totalHorasFerias:
          userCtx.ferias *
          (userCtx.horasDiff >= 9 ? (userCtx.horasDiff - 1) : userCtx.horasDiff),
        tipoFerias: tipoFerias,
        modo: modoFerias,
      };

      const response = await FeriasFinder.post('/', bodyParameters, config);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    userCtx.setIsCreatingFalta(false);
  };

  const getHourDiff = (startTime, endTime) => {
    const timeStart = new Date('01/01/2007 ' + startTime).getHours();
    const timeEnd = new Date('01/01/2007 ' + endTime).getHours();

    let diference = timeEnd - timeStart;

    if (diference < 0) {
      diference = 24 + diference;
    }
    return diference;
  };

  //console.log(tipoFerias, modoFerias);
  //console.log(horasInicio, horasFim);

  const horasDifference = getHourDiff(horasInicio, horasFim);
  userCtx.setHorasDiff(horasDifference);
  //console.log(userCtx.horasDiff);

  const sairFaltas = () => {
    userCtx.setIsCreatingFalta(false);
  };
  return (
    <Box color={'#aeaeae'} bg="#191B18" borderRadius="lg" p={3}>
      <FormControl>
        <Box p={3}>
          <FormLabel>Tipo de Ferias</FormLabel>
          <RadioGroup
            defaultValue="vaiAusentarSe"
            value={tipoFerias}
            onChange={setTipoFerias}
          >
            <HStack spacing="24px">
              <Radio value="ausentouSe">Ausentou-se</Radio>
              <Radio value="vaiAusentarSe">Vai ausentar-se</Radio>
            </HStack>
          </RadioGroup>
        </Box>
        <Box p={3}>
          <FormLabel>Modo de Ferias</FormLabel>
          <RadioGroup
            defaultValue="normal"
            value={modoFerias}
            onChange={setModoFerias}
          >
            <HStack spacing="24px">
              <Radio value="normal">Normal</Radio>
              <Radio value="justificada">Justificada</Radio>
              <Radio value="compensacao">Compesação</Radio>
            </HStack>
          </RadioGroup>
        </Box>
        <Box p={3}>
          <FormLabel>Horas</FormLabel>
          <Select
            variant="outline"
            p={1}
            placeholder="Inicio"
            value={horasInicio}
            onChange={e => setHorasInicio(e.target.value)}
          >
            <option
              value="00:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              00:00 - 00:30
            </option>
            <option
              value="00:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              00:30 - 01:00
            </option>
            <option
              value="01:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              01:00 - 01:30
            </option>
            <option
              value="01:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              01:30 - 02:00
            </option>
            <option
              value="02:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              02:00 - 02:30
            </option>
            <option
              value="02:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              02:30 - 03:00
            </option>
            <option
              value="03:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              03:00 - 03:30
            </option>
            <option
              value="03:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              03:30 - 04:00
            </option>
            <option
              value="04:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              04:00 - 04:30
            </option>
            <option
              value="04:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              04:30 - 05:00
            </option>
            <option
              value="05:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              05:00 - 05:30
            </option>
            <option
              value="05:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              05:30 - 06:00
            </option>
            <option
              value="06:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              06:00 - 06:30
            </option>
            <option
              value="06:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              06:30 - 07:00
            </option>
            <option
              value="07:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              07:00 - 07:30
            </option>
            <option
              value="07:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              07:30 - 08:00
            </option>
            <option
              value="08:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              08:00 - 08:30
            </option>
            <option
              value="08:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              08:30 - 09:00
            </option>
            <option
              value="09:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              09:00 - 09:30
            </option>
            <option
              value="09:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              09:30 - 10:00
            </option>
            <option
              value="10:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              10:00 - 10:30
            </option>
            <option
              value="10:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              10:30 - 11:00
            </option>
            <option
              value="11:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              11:00 - 11:30
            </option>
            <option
              value="11:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              11:30 - 12:00
            </option>
            <option
              value="12:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              12:00 - 12:30
            </option>
            <option
              value="12:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              12:30 - 13:00
            </option>
            <option
              value="13:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              13:00 - 13:30
            </option>
            <option
              value="13:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              13:30 - 14:00
            </option>
            <option
              value="14:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              14:00 - 14:30
            </option>
            <option
              value="14:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              14:30 - 15:00
            </option>
            <option
              value="15:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              15:00 - 15:30
            </option>
            <option
              value="15:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              15:30 - 16:00
            </option>
            <option
              value="16:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              16:00 - 16:30
            </option>
            <option
              value="16:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              16:30 - 17:00
            </option>
            <option
              value="17:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              17:00 - 17:30
            </option>
            <option
              value="17:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              17:30 - 18:00
            </option>
            <option
              value="18:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              18:00 - 18:30
            </option>
            <option
              value="18:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              18:30 - 19:00
            </option>
            <option
              value="19:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              19:00 - 19:30
            </option>
            <option
              value="19:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              19:30 - 20:00
            </option>
            <option
              value="20:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              20:00 - 20:30
            </option>
            <option
              value="20:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              20:30 - 21:00
            </option>
            <option
              value="21:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              21:00 - 21:30
            </option>
            <option
              value="21:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              21:30 - 22:00
            </option>
            <option
              value="22:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              22:00 - 22:30
            </option>
            <option
              value="22:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              22:30 - 23:00
            </option>
            <option
              value="23:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              23:00 - 23:30
            </option>
            <option
              value="23:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              23:30 - 24:00
            </option>
          </Select>
          <Select
            p={1}
            value={horasFim}
            onChange={e => setHorasFim(e.target.value)}
            placeholder="Fim"
          >
            <option
              value="00:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              00:00 - 00:30
            </option>
            <option
              value="01:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              00:30 - 01:00
            </option>
            <option
              value="01:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              01:00 - 01:30
            </option>
            <option
              value="02:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              01:30 - 02:00
            </option>
            <option
              value="02:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              02:00 - 02:30
            </option>
            <option
              value="03:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              02:30 - 03:00
            </option>
            <option
              value="03:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              03:00 - 03:30
            </option>
            <option
              value="04:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              03:30 - 04:00
            </option>
            <option
              value="04:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              04:00 - 04:30
            </option>
            <option
              value="05:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              04:30 - 05:00
            </option>
            <option
              value="05:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              05:00 - 05:30
            </option>
            <option
              value="06:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              05:30 - 06:00
            </option>
            <option
              value="06:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              06:00 - 06:30
            </option>
            <option
              value="07:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              06:30 - 07:00
            </option>
            <option
              value="07:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              07:00 - 07:30
            </option>
            <option
              value="08:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              07:30 - 08:00
            </option>
            <option
              value="08:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              08:00 - 08:30
            </option>
            <option
              value="09:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              08:30 - 09:00
            </option>
            <option
              value="09:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              09:00 - 09:30
            </option>
            <option
              value="10:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              09:30 - 10:00
            </option>
            <option
              value="10:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              10:00 - 10:30
            </option>
            <option
              value="11:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              10:30 - 11:00
            </option>
            <option
              value="11:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              11:00 - 11:30
            </option>
            <option
              value="12:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              11:30 - 12:00
            </option>
            <option
              value="12:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              12:00 - 12:30
            </option>
            <option
              value="13:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              12:30 - 13:00
            </option>
            <option
              value="13:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              13:00 - 13:30
            </option>
            <option
              value="14:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              13:30 - 14:00
            </option>
            <option
              value="14:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              14:00 - 14:30
            </option>
            <option
              value="15:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              14:30 - 15:00
            </option>
            <option
              value="15:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              15:00 - 15:30
            </option>
            <option
              value="16:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              15:30 - 16:00
            </option>
            <option
              value="16:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              16:00 - 16:30
            </option>
            <option
              value="17:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              16:30 - 17:00
            </option>
            <option
              value="17:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              17:00 - 17:30
            </option>
            <option
              value="18:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              17:30 - 18:00
            </option>
            <option
              value="18:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              18:00 - 18:30
            </option>
            <option
              value="19:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              18:30 - 19:00
            </option>
            <option
              value="19:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              19:00 - 19:30
            </option>
            <option
              value="20:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              19:30 - 20:00
            </option>
            <option
              value="20:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              20:00 - 20:30
            </option>
            <option
              value="21:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              20:30 - 21:00
            </option>
            <option
              value="21:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              21:00 - 21:30
            </option>
            <option
              value="22:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              21:30 - 22:00
            </option>
            <option
              value="22:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              22:00 - 22:30
            </option>
            <option
              value="23:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              22:30 - 23:00
            </option>
            <option
              value="23:30"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              23:00 - 23:30
            </option>
            <option
              value="24:00"
              style={{ background: '#191B18', color: '#aeaeae' }}
            >
              23:30 - 24:00
            </option>
          </Select>
        </Box>
        <Flex>
          <Box p={3}>
            <Button type="form" onClick={handleSubmitFaltas}>
              Guardar
            </Button>
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
