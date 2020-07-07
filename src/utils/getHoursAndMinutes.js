export const getHoursAndMinutes = timeData => {
  if(!timeData || timeData.toLowerCase() === 'closed' || timeData.toLowerCase() === 'n/a') {
    const hours = 0;
    const minutes = 0;
    return { hours, minutes };
  }

  const [time, modifier] = timeData.split(' ');
  const [stringHours, stringMinutes] = time.split(':');
    
  let hours = parseInt(stringHours, 10);
  const minutes = parseInt(stringMinutes, 10);

  const modifierWithoutPunctuation = modifier.toLowerCase().replace(/./g, '');
  if(hours === 12 && modifierWithoutPunctuation === 'am') {
    hours = 0;
  };
  if(modifierWithoutPunctuation === 'pm') {
    hours = hours + 12;
  };

  return { hours, minutes };
};
