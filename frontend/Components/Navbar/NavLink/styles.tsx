import { createUseStyles } from 'react-jss';

export default createUseStyles({
  listItemButton: {
    overflow: 'hidden',
    background: 'linear-gradient(to right, #009432, #009432 50%, #fff 50%)',
    backgroundClip: "text",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
    backgroundSize: "200% 100%",
    backgroundPosition: "100%",
    transition: 'background-position 275ms ease',
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
    },
  },
});
