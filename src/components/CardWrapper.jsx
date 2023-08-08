import styled from '@emotion/styled';
import theme from '../theme/theme';
import { Card } from '@mui/material';

const CardWrapper = styled(Card)`
  background-color: ${theme.palette.neutral.grey[800.8]};
  backdrop-filter: blur(40px);
  border: 4px solid transparent;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 180px;
  min-height: 100%;
`;

export default CardWrapper;
