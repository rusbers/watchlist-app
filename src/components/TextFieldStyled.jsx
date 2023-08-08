import { forwardRef } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import theme from '../theme/theme';

const TextFieldStyled = forwardRef((props, ref) => {
  return (
    <MuiTextField
      {...props}
      fullWidth
      InputLabelProps={{ sx: { color: 'inherit' } }}
      InputProps={{
        sx: {
          borderRadius: '12px',
        },
        ref,
      }}
      sx={{
        marginBottom: 2,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme.palette.neutral.grey[800],
            borderWidth: '2px',
          },
        },
      }}
    />
  );
});

export default TextFieldStyled;
