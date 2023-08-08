import { IconButton } from '@mui/material';

const ActionWrapper = ({ success, icon, successIcon, onClickHandler, ...rest }) => (
  <IconButton onClick={onClickHandler} fontSize='large' {...rest}>
    {success ? successIcon : icon}
  </IconButton>
);

export default ActionWrapper;
