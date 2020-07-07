import { useState, useEffect } from 'react';

export const useGetHoursString = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [openingHoursRecord, setOpeningHoursRecord] = useState('');
  const [closingHoursRecord, setClosingHoursRecord] = useState('');

  const weekdayFactory = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  useEffect(() => {
    const today = new Date();
    const now = today.getTime();

    setCurrentTime(now);

    const dayOfWeekAsNumber = today.getDay();
   
    const dayOfWeekAsString = weekdayFactory[dayOfWeekAsNumber].toLowerCase();

    // get string that matches column in data
    setOpeningHoursRecord(`${dayOfWeekAsString}_open`);
    setClosingHoursRecord(`${dayOfWeekAsString}_close`);
  }, []);

  return { currentTime, openingHoursRecord, closingHoursRecord };
}
