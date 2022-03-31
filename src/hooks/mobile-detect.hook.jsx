import {useState, useLayoutEffect} from "react";

function debounce(func) {
  let timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 1200, event);
  };
}

export function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < 768);

    window.addEventListener(
      "resize",
      debounce(function () {
        setIsMobile(window.innerWidth < 768);
      })
    );
  }, []);

  return isMobile;
}
