import { Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AuthPaper = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 10,
  borderRadius: 0,
  backgroundColor: 'transparent',
  border: '1px solid #4B4B4B',
  '& .MuiTextField-root': {
    margin: 10,
  },
}));

export const AuthAvatar = styled(Avatar)(() => ({
  margin: 10,
  backgroundColor: 'transparent',
}));
