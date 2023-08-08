import styled from '@emotion/styled';
import theme from '../theme/theme';
import { Typography } from '@mui/material';

const MediaTitleText = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0.5em;
  border-radius: 1.5em;
  margin-right: 0.3em;
  color: ${theme.palette.neutral.grey[50]};
`;

const MediaTitle = ({ name, releaseYear, ...props }) => {
  return (
    <Typography component='h2' sx={{ display: 'flex', alignItems: 'baseline' }}>
      <MediaTitleText component='span' {...props}>
        {name}
      </MediaTitleText>
      <Typography component='span'>{`(${releaseYear})`}</Typography>
    </Typography>
  );
};

export default MediaTitle;
