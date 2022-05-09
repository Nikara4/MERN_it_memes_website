import useStyles from './styles';
import Link from 'next/link';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

interface NavLinkProps {
    to: string,
    icon: JSX.Element,
    path: string,
    setShowMobileMenu?: Function,
}

const NavLink = ({ to, icon, path, setShowMobileMenu }: NavLinkProps) => {
  const classes = useStyles();
  return (
    <ListItem disablePadding>
      <ListItemButton className={classes.listItemButton} onClick={() => setShowMobileMenu && setShowMobileMenu()}>
        <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
        <Link href={to} passHref>
          <ListItemText primary={path} className={classes.listItemText} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export default NavLink;
