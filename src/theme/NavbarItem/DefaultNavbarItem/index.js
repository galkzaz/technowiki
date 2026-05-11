import React from "react";
import DefaultNavbarItem from "@theme-original/NavbarItem/DefaultNavbarItem";
import { useLocation } from "@docusaurus/router";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DefaultNavbarItemWrapper(props) {
  const { pathname } = useLocation();
  const className = props.className || "";

  // 1. Identify Section State
  const isMath = pathname.startsWith(useBaseUrl("/mathematics"));
  const isHardware = pathname.startsWith(useBaseUrl("/hardware-design"));
  const isEmbedded = pathname.startsWith(useBaseUrl("/embedded-systems"));

  // Logical separation for your two software plugins
  const isSoftEng = pathname.startsWith(useBaseUrl("/software-engineering"));
  const isSoftSystems = pathname.startsWith(useBaseUrl("/software-systems"));

  const isAnySection =
    isMath || isHardware || isEmbedded || isSoftEng || isSoftSystems;

  // 2. Filter Logic

  // Hide Hub links (Right side) if deep in a wiki
  if (isAnySection && className.includes("nav-main-hub")) {
    return null;
  }

  // Hide Section-Specific items if not in that section
  if (className.includes("nav-math-only") && !isMath) return null;
  if (className.includes("nav-hardware-only") && !isHardware) return null;
  if (className.includes("nav-software-only") && !isSoftSystems) return null;
  if (className.includes("nav-software-engineering-only") && !isSoftEng)
    return null;
  if (className.includes("nav-embedded-only") && !isEmbedded) return null;

  // Hide "Back to Hub" if we are at the root homepage
  if (pathname === "/" && className.includes("nav-back-hub")) {
    return null;
  }

  return <DefaultNavbarItem {...props} />;
}
