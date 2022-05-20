import {
  Card,
  Box,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const PostCard = styled(Card)(() => ({
  fontFamily: 'Poppins, sans-serif',
  backgroundColor: 'transparent',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 0,
  boxShadow: 'none',
}));

export const TagsBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
}));

export const TagBox = styled(Box)(({ theme }) => ({
  padding: '1px 10px',
  backgroundColor: '#E5E4E2',
  cursor: 'pointer',
  transition: '0.1s',
  '&:hover': {
    backgroundColor: '#50C878',
  },
  [theme.breakpoints.down('md')]: {
    padding: '1px 7px',
    backgroundColor: '#E5E4E2',
    '&:hover': {
      backgroundColor: '#E5E4E2',
    },
  },
}));

export const TagTypography = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  lineHeight: '18px',
  fontFamily: 'Poppins, sans-serif',
  color: 'black',
  fontWeight: '600',
  letterSpacing: 'normal',
  textTransform: 'uppercase',
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: '600',
  },
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
  margin: '2px 0',
  fontSize: 24,
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  transition: '0.1s',
  cursor: 'pointer',
  color: '#F9F6EE',
  '&:hover': {
    color: '#50C878',
  },
  [theme.breakpoints.down('md')]: {
    fontWeight: 400,
  },
}));

export const OverlayTypography = styled(Typography)(() => ({
  marginLeft: '0 !important',
  fontFamily: 'Poppins, sans-serif',
  color: '#F9F6EE',
  fontWeight: 300,
}));

export const PostCardMedia = styled(CardMedia)(() => ({
  width: '100%',
  height: 'auto',
  paddingTop: '80%',
  backgroundSize: 'contain',
  cursor: 'pointer',
  transition: '0.1s',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export const PostCardActions = styled(CardActions)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '5px 0',
  '&::after': {
    width: '100%',
    margin: '5px auto',
    content: '""',
    borderBottom: '1px solid #71797E',
  },
}));

export const ActionsBox = styled(Box)(() => ({
  marginLeft: '0 !important',
  fontFamily: 'Poppins, sans-serif',
  color: '#F9F6EE',
}));

export const PostButton = styled(Button)(() => ({
  fontFamily: 'Poppins, sans-serif',
  alignItems: 'left',
  justifyContent: 'flex-start',
  padding: '4px 5px',
  color: '#F9F6EE',
  fontSize: 14,
  fontWeight: '600',
  transition: '0.1s',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#50C878',
  },
}));

export const LikesCardActions = styled(CardActions)(() => ({
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
}));

export const LikesBox = styled(Box)(() => ({
  marginLeft: '0 !important',
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'flex-start',
  '& .Mui-disabled': {
    color: '#F9F6EE !important',
  }
}));
