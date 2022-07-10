import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from '../context/UserContext';
import './Calendar.css';

import { Box } from '@chakra-ui/react';

const CalendarComponent = () => {
  const userCtx = useContext(UserContext);
  const getDayDiff = (startDay, endDay) => {
    let date1 = new Date(startDay);
    let date2 = new Date(endDay);

    let timeDifference = Math.abs(
      Math.round(date1.getTime() - date2.getTime())
    );
    let dayDifference = Math.abs(
      Math.round(timeDifference / (1000 * 3600 * 24))
    );

    return dayDifference;
  };
  const diasDifference = getDayDiff(
    userCtx.feriasCalendar[0],
    userCtx.feriasCalendar[1]
  );
  userCtx.setFerias(diasDifference);
  //console.log(diasDifference);

  return (
    <Box>
      <Calendar
        value={userCtx.feriasCalendar}
        onChange={userCtx.setFeriasCalendar}
        showWeekNumbers={true}
        selectRange={true}
      />
    </Box>
  );
};

export default CalendarComponent;
