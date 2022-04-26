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
}

const NavLink = ({ to, icon, path }: NavLinkProps) => {
  const classes = useStyles();
  return (
    <ListItem disablePadding>
      <ListItemButton className={classes.listItemButton}>
        <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
        <Link href={to} passHref>
          <ListItemText primary={path} className={classes.listItemText} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export default NavLink;
