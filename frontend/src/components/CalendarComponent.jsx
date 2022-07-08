import React from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

import { Box } from '@chakra-ui/react';

const CalendarComponent = () => {
  return (
    <Box>
      <Calendar showWeekNumbers={true} selectRange={true} />
    </Box>
  );
};

export default CalendarComponent;
