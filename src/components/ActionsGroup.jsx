import styled from '@emotion/styled';
import theme from '../theme/theme';
import { Stack } from '@mui/material';

const ActionsGroup = styled(Stack)`
  flex-direction: row;
  gap: ${theme.spacing(1)};
`;

export default ActionsGroup;
