const getImageSizeUrl = (size = 'original/') => {
  const IMAGE_SERVER_URL = 'https://image.tmdb.org/t/p/';

  return `${IMAGE_SERVER_URL}${size}`;
};

export default getImageSizeUrl;
