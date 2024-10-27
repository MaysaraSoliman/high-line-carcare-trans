"use client";
import { useEffect, useState } from "react";
import DesktopBottomHeader from "./desktopHeader/bottomHeader/DesktopBottomHeader";
import MobileBottomHeader from "./mobileHeader/MobileBottomHeader";
import { useMediaQuery } from "react-responsive";

const MainHeader = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const isTabletOrLarger = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    setIsDesktop(isTabletOrLarger);
  }, [isTabletOrLarger]);
  return <>{isDesktop ? <DesktopBottomHeader /> : <MobileBottomHeader />}</>;
};

export default MainHeader;
