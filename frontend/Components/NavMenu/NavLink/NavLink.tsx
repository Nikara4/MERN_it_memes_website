import Link from 'next/link';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const NavLink = (props: any) => {
  const { to, icon, path } = props;
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <Link href={to} passHref>
          <ListItemText primary={path} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export default NavLink;
