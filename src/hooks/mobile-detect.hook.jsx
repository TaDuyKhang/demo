import {useState, useEffect} from "react";
import {debounce} from "../helper/debounce";

export function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const resizeHandler = debounce(function () {
      const _isMobile = window.innerWidth < 768;
      isMobile !== _isMobile && setIsMobile(_isMobile);
    }, 1200);

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isMobile]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return isMobile;
}
