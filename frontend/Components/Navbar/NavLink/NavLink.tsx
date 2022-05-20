import Link from 'next/link';
import { NavItemButton, NavItemIcon, NavItemText, NavMenuItem } from './styled';

interface NavLinkProps {
    to: string,
    icon: JSX.Element,
    path: string,
    setShowMobileMenu?: Function,
}

const NavLink = ({ to, icon, path, setShowMobileMenu }: NavLinkProps) => {
  return (
    <NavMenuItem>
      <NavItemButton onClick={() => setShowMobileMenu && setShowMobileMenu()}>
        <NavItemIcon>{icon}</NavItemIcon>
        <Link href={to} passHref>
          <NavItemText primary={path} />
        </Link>
      </NavItemButton>
    </NavMenuItem>
  );
};

export default NavLink;
