import { DialogActions } from '@mui/material';
import Button from './Button';

const SubmitDialogBtn = ({ label, handler }) => {
  return (
    <DialogActions>
      <Button type='submit' sx={{ width: '100%' }} onClick={handler} color='primary'>
        {label}
      </Button>
    </DialogActions>
  );
};

export default SubmitDialogBtn;
