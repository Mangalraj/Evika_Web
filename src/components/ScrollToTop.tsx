import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "0, 0" means x=0, y=0 (top left corner)
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs every time the URL 'pathname' changes

  return null;
};

export default ScrollToTop;
