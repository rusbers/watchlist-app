import { format, isValid } from 'date-fns';

const formatReleaseDate = (movieReleaseDate) => {
  if (isValid(movieReleaseDate)) {
    const movieReleaseYear = new Date(movieReleaseDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const movieReleaseDateFormated = format(movieReleaseDate, 'dd MMM yyyy');

    const isReleaseYearCurrentYear = movieReleaseYear === currentYear;

    return isReleaseYearCurrentYear ? movieReleaseDateFormated : movieReleaseYear;
  }

  return '';
};

export default formatReleaseDate;
