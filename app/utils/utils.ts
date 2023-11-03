import {Platform} from 'react-native';

const keyExtractor = (item: any, index: number) => item + index;
const isIos = Platform.OS === 'ios';

const getRandomElement = (arr: any) => {
  if (!arr || arr?.length === 0) {
    return undefined; // Return undefined if the array is empty.
  }

  const randomIndex = Math.floor(Math.random() * arr?.length);
  return arr[randomIndex];
};

const getRandomDate = () => {
  const currentDate = new Date();
  const endDate = currentDate;
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - 15);

  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());

  const randomDate = new Date(randomTime);

  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const getRandomTime = () => {
  const randomHour = Math.floor(Math.random() * 12); // Random hour between 0 and 11
  const randomMinute = Math.floor(Math.random() * 60); // Random minute between 0 and 59
  const amPm = Math.random() < 0.5 ? 'AM' : 'PM'; // Randomly select AM or PM

  // Format hours and minutes with leading zeros if needed
  const formattedHour = String(randomHour).padStart(2, '0');
  const formattedMinute = String(randomMinute).padStart(2, '0');

  // Concatenate the time components with AM/PM
  const randomTime = `${formattedHour}:${formattedMinute} ${amPm}`;

  return randomTime;
};

const getDayForTimeLine = () => {
  const currentDate = new Date();
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Get the current day of the week as an index (0 for Sunday, 1 for Monday, etc.)
  const dayIndex = currentDate.getDay();

  // Get the current day name using the day index
  const currentDay = daysOfWeek[dayIndex];

  // Get the current day of the month (1-31)
  const currentDayOfMonth = currentDate.getDate();

  // Combine the day and date as a string
  const currentDayAndDate = `${currentDay}, ${currentDayOfMonth}`;

  return currentDayAndDate;
};

const getCommaSeparatedValue = (number: string) => {
  if (!number) {
    return '';
  }
  let response: any = removeCommaFromPrice(number);
  response = parseFloat(response);
  if (response) {
    response = response?.toLocaleString?.();
  } else {
    response = '';
  }
  return response || '';
};

const removeCommaFromPrice = (number: string) => {
  let newNumber: any = (number + '')?.replace(/[^0-9]/g, '');

  if (newNumber) {
    newNumber = parseInt(newNumber);
  } else {
    newNumber = 0;
  }
  return newNumber;
};

export {
  keyExtractor,
  isIos,
  getRandomElement,
  getRandomDate,
  getRandomTime,
  getDayForTimeLine,
  getCommaSeparatedValue,
  removeCommaFromPrice,
};
