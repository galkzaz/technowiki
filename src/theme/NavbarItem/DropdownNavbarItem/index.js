import React from 'react';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import { useLocation } from '@docusaurus/router';

export default function DropdownNavbarItemWrapper(props) {
  const { pathname } = useLocation();
  const className = props.className || '';

  // 1. Identify Section State (Paths from your docusaurus.config.ts)
  const isMath = pathname.startsWith('/mathematics');
  const isHardware = pathname.startsWith('/hardware-design');
  const isEmbedded = pathname.startsWith('/embedded-systems');

  /**
   * Logic for Software Sections:
   * isSoftEng triggers for the specific Engineering instance.
   * isSoftSystems triggers for Systems ONLY if not in Engineering.
   */
  const isSoftEng = pathname.startsWith('/software-engineering');
  const isSoftSystems = pathname.startsWith('/software-systems');

  const isAnySection = isMath || isHardware || isEmbedded || isSoftEng || isSoftSystems;

  // 2. Filter Logic for Dropdowns

  // Hide dropdowns that belong to specific sections if we aren't in them
  if (className.includes('nav-math-only') && !isMath) return null;
  if (className.includes('nav-hardware-only') && !isHardware) return null;
  if (className.includes('nav-software-only') && !isSoftSystems) return null;
  if (className.includes('nav-software-engineering-only') && !isSoftEng) return null;
  if (className.includes('nav-embedded-only') && !isEmbedded) return null;

  // 3. Hide Main Hub dropdowns (if you ever change them to dropdowns)
  if (isAnySection && className.includes('nav-main-hub')) {
    return null;
  }

  // If none of the hide conditions are met, render the standard dropdown
  return <DropdownNavbarItem {...props} />;
}
