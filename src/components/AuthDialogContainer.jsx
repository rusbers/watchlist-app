import { Dialog, DialogTitle, DialogContent, Box } from '@mui/material';
import SubmitDialogBtn from './SubmitDialogBtn';
import CloseDialogBtn from './CloseDialogBtn';
import theme from '../theme/theme';

function AuthDialogContainer(props) {
  const { onOpen, dialogLabel, onClose, onSubmit, children, ...rest } = props;

  return (
    <Dialog
      component='form'
      onSubmit={onSubmit}
      PaperProps={{ sx: { background: theme.palette.background.default } }}
      open={onOpen}
      onClose={onClose}
      {...rest}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <DialogTitle variant='h4' fontWeight={600} color={theme.palette.neutral.grey[100]}>
          {dialogLabel}
        </DialogTitle>
        <CloseDialogBtn handler={onClose} />
      </Box>
      <DialogContent id='dialog-inputs' sx={{ overflow: 'unset' }}>
        {children}
      </DialogContent>
      <SubmitDialogBtn label={dialogLabel} />
    </Dialog>
  );
}

export default AuthDialogContainer;
