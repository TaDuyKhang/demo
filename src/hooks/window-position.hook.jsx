import {useState, useLayoutEffect} from "react";
import {debounce} from "../helper/debounce";

export function useWindowPosition() {
  const [position, setPosition] = useState(0);

  useLayoutEffect(() => {
    window.addEventListener(
      "scroll",
      debounce(function () {
        setPosition(window.scrollY);
      })
    );
  }, []);

  return position;
}
