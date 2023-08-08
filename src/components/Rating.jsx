import { Box, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import theme from '../theme/theme';
import styled from '@emotion/styled';
import roundVoteAverage from '../helpers/roundVoteAverage';

const RatingBox = styled(Box)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1;
  width: 50px;
  height: 30px;
  padding: 8px;
  border-radius: 8px;
  z-index: 5;
  background: ${theme.palette.neutral.black[65]};
  color: ${theme.palette.warning[500]};
  backdrop-filter: blur(4px);
`;

function Rating({ rating = 0 }) {
  const roundedRating = roundVoteAverage(rating);

  return (
    <RatingBox>
      <StarRateIcon stroke='currentColor' sx={{ width: 16, height: 16 }} />
      <Typography component='span'>{roundedRating}</Typography>
    </RatingBox>
  );
}

export default Rating;
