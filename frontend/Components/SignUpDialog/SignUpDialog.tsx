import { DialogActions, DialogContentText } from '@mui/material';
import { AuthDialog, AuthDialogContent, AuthDialogContentText } from './styled';
import { FormTitle, FormButton } from '../../styles/globalComponents';

const SignUpDialog = ({ closeDialog, open }: any) => {
  return (
    <AuthDialog open={open} onClose={closeDialog} maxWidth='sm' fullWidth>
      <FormTitle>Sign Up successful</FormTitle>
      <AuthDialogContent>
        <AuthDialogContentText>
          Your account has been successfully created. You can now login.
        </AuthDialogContentText>
      </AuthDialogContent>
      <DialogActions>
        <FormButton sx={{ margin: '0 auto' }} onClick={closeDialog}>
          Close
        </FormButton>
      </DialogActions>
    </AuthDialog>
  );
};

export default SignUpDialog;
