export const getHoursAndMinutes = timeData => {
  if(!timeData || timeData.toLowerCase() === ('closed' || 'n/a')) {
    const hours = 0;
    const minutes = 0;
    return { hours, minutes };
  }

  const [time, modifier] = timeData.split(' ');
  const [stringHours, stringMinutes] = time.split(':');
    
  let hours = parseInt(stringHours, 10);
  const minutes = parseInt(stringMinutes, 10);

  if(hours === 12 && modifier.toLowerCase() === ('am' || 'a.m.')) {
    hours = 0;
  };  
  if(modifier.toLowerCase() === ('pm' || 'p.m.')) {
    hours = hours + 12;
  };

  return { hours, minutes };
};
