import { getHoursAndMinutes } from './getHoursAndMinutes';

export const getOpenStatus = (item, currentTime, openingHoursRecord, closingHoursRecord) => {
  // get a safe place's opening/closing times (in PST) from database
  const openingTimeData = item[openingHoursRecord];
  const closingTimeData = item[closingHoursRecord];

  // get hours and minutes for opening/closing time
  const { hours: openingHours, minutes: openingMinutes } = getHoursAndMinutes(openingTimeData);
  const { hours: closingHours, minutes: closingMinutes } = getHoursAndMinutes(closingTimeData);

  // set opening and closing times for current day in ms
  const openingTimeToday = new Date();
  openingTimeToday.setHours(openingHours, openingMinutes);
  const closingTimeToday = new Date();
  closingTimeToday.setHours(closingHours, closingMinutes);

  // compare current time to opening and closing times
  const isOpen = currentTime >= openingTimeToday && currentTime < closingTimeToday ? true : false;

  return { isOpen, closingTimeData};
}
