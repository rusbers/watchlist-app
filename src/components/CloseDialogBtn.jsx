import { IconButton } from '@mui/material';
import CloseIcon from '../assets/icons/close-square.svg';

const CloseDialogBtn = ({ handler }) => {
  return (
    <IconButton disableRipple onClick={handler}>
      <CloseIcon width='40' height='40' />
    </IconButton>
  );
};

export default CloseDialogBtn;
