import Link from 'next/link';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styles } from './styles';

const NavLink = (props: any) => {
  const { to, icon, path } = props;
  return (
    <ListItem disablePadding style={styles.listItem}>
      <ListItemButton style={styles.listButton}>
        <ListItemIcon style={styles.listIcon}>{icon}</ListItemIcon>
        <Link href={to} passHref>
          <ListItemText primary={path} style={styles.listText} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export default NavLink;
