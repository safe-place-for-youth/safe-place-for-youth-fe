export const getHoursAndMinutes = timeData => {
  if(timeData === 'closed') {
    const hours = 0;
    const minutes = 0;
    return { hours, minutes };
  }

  const [time, modifier] = timeData.split(' ');
  const [stringHours, stringMinutes] = time.split(':');
  
  // handle edge cases (punctuation, capitalization, empty fields...)
  
  let hours = parseInt(stringHours, 10);
  const minutes = parseInt(stringMinutes, 10);

  if(hours === 12 && modifier === 'am') {
    hours = 0;
  };
  
  if(modifier === 'pm') {
    hours = hours + 12;
  };

  return { hours, minutes };
};
