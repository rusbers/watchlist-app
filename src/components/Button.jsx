import { Button as MuiButton } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../theme/theme';

const variantStyles = {
  dark: {
    backgroundColor: theme.palette.primary.light,
    hoverBackgroundColor: theme.palette.primary.main,
    activeOutline: `2px solid ${theme.palette.primary.main}`,
    activeBackgroundColor: theme.palette.primary.light,
    textColor: theme.palette.neutral.white[100],
  },
  light: {
    backgroundColor: theme.palette.neutral.grey[50],
    hoverBackgroundColor: theme.palette.neutral.grey[100],
    activeOutline: `2px solid ${theme.palette.neutral.grey[100]}`,
    activeBackgroundColor: theme.palette.neutral.grey[50],
    textColor: theme.palette.neutral.black[100],
  },
};

const StyledButton = styled(MuiButton)`
  font-size: inherit;
  min-height: 45px;
  min-width: 100px;
  border-radius: 12px;
  color: ${({ variant }) => variantStyles[variant].textColor};
  background-color: ${({ variant }) => variantStyles[variant].backgroundColor};
  &:hover {
    background-color: ${({ variant }) => variantStyles[variant].hoverBackgroundColor};
  }
  &:active {
    outline: ${({ variant }) => variantStyles[variant].activeOutline};
    background-color: ${({ variant }) => variantStyles[variant].activeBackgroundColor};
  }
`;

function Button({ children, variant = 'dark', ...props }) {
  return (
    <StyledButton disableRipple {...props} variant={variant}>
      {children}
    </StyledButton>
  );
}

export default Button;
