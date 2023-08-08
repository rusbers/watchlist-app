import theme from '../theme/theme';
import { Typography, Tooltip, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CardTitle = ({ title, urlPath }) => (
  <Typography fontWeight={600} color={theme.palette.neutral.grey[50]} component='h3' fontSize={14}>
    <Tooltip title={title}>
      <Link
        component={RouterLink}
        sx={{
          maxWidth: '17ch',
          display: 'block',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        underline='none'
        color='inherit'
        to={urlPath}
      >
        {title}
      </Link>
    </Tooltip>
  </Typography>
);

export default CardTitle;
