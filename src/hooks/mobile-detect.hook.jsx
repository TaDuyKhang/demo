import {useState, useLayoutEffect} from "react";

export function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return isMobile;
}
