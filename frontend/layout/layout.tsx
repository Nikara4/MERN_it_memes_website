import { useState } from 'react';

import { Navbar } from '../components';
import { Header } from '../containers';
import useMobile from '../utils/hooks/useMobile';
import {
  LayoutContainer,
  LayoutGridContainer,
  LayoutMenuItem,
  LayoutGridItem,
} from './styled';

function Layout({ children }: any) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isMobile = useMobile();

  return (
    <>
      <Header
        showMobileMenu={showMobileMenu}
        isMobile={isMobile}
        setShowMobileMenu={setShowMobileMenu}
      />
      <LayoutContainer maxWidth='lg' style={{ justifyContent: 'space-evenly' }}>
        <LayoutGridContainer container spacing={2}>
          <LayoutMenuItem item xs={6} md={3}>
            <Navbar
              isMobile={isMobile}
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
          </LayoutMenuItem>
          <LayoutGridItem item xs={6} md={8}>
            <main>{children}</main>
          </LayoutGridItem>
        </LayoutGridContainer>
      </LayoutContainer>
    </>
  );
}

export default Layout;
