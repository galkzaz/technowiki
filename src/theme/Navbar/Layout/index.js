import React from 'react';
import NavbarLayout from '@theme-original/Navbar/Layout';
import { useLocation } from '@docusaurus/router';

export default function NavbarLayoutWrapper(props) {
  const { pathname } = useLocation();

  // If the path is exactly '/', don't render the navbar at all
  if (pathname === '/') {
    return null;
  }

  return (
    <NavbarLayout {...props} />
  );
}
