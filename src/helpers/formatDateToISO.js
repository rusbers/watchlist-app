import format from 'date-fns/format';

const formatDateToISO = (date) => {
  const dateToFormat = date || new Date();
  return format(dateToFormat, 'yyyy-MM-dd');
};

export default formatDateToISO;