import moment from 'moment-timezone';

const calculateTime = (dateString: string) => {
  const givenDate = moment(dateString, 'YYYY-MM-DD');
  const currentDate = moment();

  // Calculate the difference in each unit
  const seconds = currentDate.diff(givenDate, 'seconds');
  const minutes = currentDate.diff(givenDate, 'minutes');
  const hours = currentDate.diff(givenDate, 'hours');
  const days = currentDate.diff(givenDate, 'days');
  const weeks = currentDate.diff(givenDate, 'weeks');
  const months = currentDate.diff(givenDate, 'months');

  let result;
  switch (true) {
    case seconds < 60:
      result = `${seconds} second${seconds === 1 ? '' : 's'}`;
      break;
    case minutes < 60:
      result = `${minutes} minute${minutes === 1 ? '' : 's'}`;
      break;
    case hours < 24:
      result = `${hours} hour${hours === 1 ? '' : 's'}`;
      break;
    case days < 7:
      result = `${days} day${days === 1 ? '' : 's'}`;
      break;
    case weeks < 4:
      result = `${weeks} week${weeks === 1 ? '' : 's'}`;
      break;
    case months < 12:
      result = `${months} month${months === 1 ? '' : 's'}`;
      break;
    default:
      result = givenDate.format('DD MMM, YYYY');
      break;
  }

  return result;
};

export default calculateTime;
