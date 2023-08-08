import { IconButton } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../theme/theme';

const IconButtonStyled = styled(IconButton)`
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  background: ${theme.palette.neutral.black[30]};
  cursor: pointer;
  &:hover {
    background: ${theme.palette.primary[500.1]};
  }
`;

const MenuButton = ({ children, ...rest }) => (
  <IconButtonStyled
    sx={{
      justifyContent: 'center',
      alignItems: 'center',
    }}
    {...rest}
  >
    {children}
  </IconButtonStyled>
);
export default MenuButton;
