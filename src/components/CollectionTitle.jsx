import { Typography } from '@mui/material';
import theme from '../theme/theme';
import { TV_SHOW } from '../helpers/mediaTypeNamespace';

const CollectionTitle = ({ variant }) => {
  const title = variant === TV_SHOW ? 'Aired Seasons' : 'Belongs to collection:';
  return (
    <Typography sx={{ color: theme.palette.neutral.grey[50] }} variant='h5' fontWeight={600}>
      {title}
    </Typography>
  );
};

export default CollectionTitle;
