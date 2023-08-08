import getImageSizeUrl from '../helpers/getImageSizeUrl';
import theme from '../theme/theme';

const Poster = ({ altText, posterPath, width = '300', height = 'auto' }) => {
  const posterUrl = `${getImageSizeUrl('w500/')}${posterPath}`;
  const placeholderPath = '/src/assets/images/placeholder/img_not_available.png';
  const alt = posterPath ? altText : 'image not available';
  const source = posterPath ? posterUrl : placeholderPath;

  return (
    <img
      loading='lazy'
      width={width}
      height={height}
      style={{
        display: 'flex',
        borderRadius: 24,
        backgroundColor: theme.palette.neutral.grey[800],
        height: `${height}px`,
      }}
      src={source}
      alt={alt}
    />
  );
};

export default Poster;
