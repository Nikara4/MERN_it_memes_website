import { DialogActions } from '@mui/material';

import { CustomDialog, CustomDialogContent, CustomDialogContentText } from './styled';
import { FormTitle, FormButton } from '../../styles/globalComponents';

const Dialog = ({ closeDialog, open, children, title }: any) => {

  return (
    <CustomDialog open={open} onClose={closeDialog} maxWidth='sm' fullWidth>
      <FormTitle>{title}</FormTitle>
      <CustomDialogContent>
        <CustomDialogContentText>
          {children}
        </CustomDialogContentText>
      </CustomDialogContent>
      <DialogActions sx={{ padding: '24px' }}>
        <FormButton sx={{ margin: '0 auto' }} onClick={closeDialog}>
          Close
        </FormButton>
      </DialogActions>
    </CustomDialog>
  );
};

export default Dialog;
