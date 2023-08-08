import { Box, Skeleton } from '@mui/material';
import CardWrapper from './CardWrapper';
import MuiCardActionsStyled from './MuiCardActionsStyled';
import ActionsGroup from './ActionsGroup';
import styled from '@emotion/styled';

const RatingSkeleton = styled(Skeleton)`
  width: 50px;
  height: 30px;
`;

const ActionSkeleton = styled(Skeleton)`
  width: 24px;
  height: 30px;
`;

function SkeletonCard({ ...props }) {
  const PLACEHOLDER_IMG = '/src/assets/images/placeholder/placeholder.png';

  return (
    <CardWrapper {...props} className='wrapper'>
      <MuiCardActionsStyled>
        <RatingSkeleton />
        <ActionsGroup>
          <ActionSkeleton />
          <ActionSkeleton />
        </ActionsGroup>
      </MuiCardActionsStyled>
      <Skeleton sx={{ display: 'flex', transform: 'none' }} className='poster'>
        <img aria-hidden width='300' height='450' src={PLACEHOLDER_IMG} alt='placeholder' />
      </Skeleton>
      <Box sx={{ paddingBlock: 1, minWidth: '17ch' }}>
        <Skeleton />
      </Box>
    </CardWrapper>
  );
}

export default SkeletonCard;
