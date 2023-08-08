import { Skeleton, Typography } from '@mui/material';
import DetailsLayout from './DetailsLayout';
import theme from '../theme/theme';

const PosterSkeleton = () => (
  <Skeleton sx={{ transform: 'none', borderRadius: '24px', minHeight: '150px' }} aria-hidden>
    <img
      width='300'
      src='/src/assets/images/placeholder/img_not_available.png'
      alt='loading image'
    />
  </Skeleton>
);

const InfoSkeleton = () => (
  <>
    <Typography sx={{ fontSize: '32px' }}>
      <Skeleton sx={{ maxWidth: 250 }} />
    </Typography>
    <Typography gutterBottom fontSize={20} color={theme.palette.neutral.grey[50]}>
      <Skeleton sx={{ maxWidth: 250 }} />
    </Typography>
    <Typography gutterBottom fontSize='18px'>
      <Skeleton />
      <Skeleton />
      <Skeleton width='80%' />
      <Skeleton width='80%' />
      <Skeleton width='80%' />
    </Typography>
  </>
);

const DetailsSkeleton = () => <DetailsLayout poster={<PosterSkeleton />} info={<InfoSkeleton />} />;

export default DetailsSkeleton;
