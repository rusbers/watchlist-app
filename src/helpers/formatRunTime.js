import toHoursAndMinutes from './toHoursAndMinutes';

const formatRunTime = (runtime) => {
  if (!runtime || runtime.length === 0) return null;
  const { hours, minutes } = toHoursAndMinutes(runtime);
  const hoursFormatted = `${hours ? `${hours}h` : ''}`;
  const minutesFormatted = `${minutes ? `${minutes}m` : ''}`;

  return `${hoursFormatted} ${minutesFormatted}`.trim();
};

export default formatRunTime;
