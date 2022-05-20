import { createUseStyles } from 'react-jss';

export default createUseStyles({
  listItemButton: {
    overflow: 'hidden',
    background: 'linear-gradient(to right, #50C878, #00A36C 50%, #1D1D1D 50%)',
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
    backgroundSize: '200% 100%',
    backgroundPosition: '100%',
    transition: 'background-position 225ms ease',
    '&:hover': {
      backgroundPosition: '0 100%',
    },
  },
  listItemIcon: {
    minWidth: '40px',
  },
  listItemText: {
    '& span': {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 16,
      fontWeight: 300,
    },
  },
  '@media (max-width: 1024px)': {
    listItemButton: {
      background: 'transparent',
      '&:hover': {
        backgroundPosition: 'transparent',
      },
    },
  },
  '@media (max-width: 899px) and (orientation: portrait)': {
    listItemText: {
      '& span': {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
      },
    },
  },
  '@media (max-width: 375px) and (orientation: portrait)': {},
});
