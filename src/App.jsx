import "./css/index.scss";
import Menu from "./component/Menu.jsx";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Section5 from "./component/Section5";
import Section7 from "./component/Section7";
import Section8 from "./component/Section8";
import Footer from "./component/Footer";
import Section6 from "./component/Section6";
import {useCallback, useRef} from "react";
import {SECTION_KEY} from "./constants/menu";

function App() {
  const eleRefs = useRef({});
  const positionRefs = useRef(null);

  const setRef = useCallback(
    (key) => (element) => {
      eleRefs.current[key] = element;
    },
    []
  );

  return (
    <div className="App">
      <div ref={setRef(SECTION_KEY.menu)}>
        <Menu positionRefs={positionRefs} eleRefs={eleRefs} />
      </div>

      <div className="app-content">
        <div ref={setRef(SECTION_KEY.section1)}>
          <Section1 />
        </div>

        <div ref={setRef(SECTION_KEY.section2)}>
          <Section2 />
        </div>

        <div ref={setRef(SECTION_KEY.section3)}>
          <Section3 />
        </div>

        <div ref={setRef(SECTION_KEY.section4)}>
          <Section4 />
        </div>

        <div ref={setRef(SECTION_KEY.section5)}>
          <Section5 />
        </div>

        <div ref={setRef(SECTION_KEY.section6)}>
          <Section6 />
        </div>

        <div ref={setRef(SECTION_KEY.section7)}>
          <Section7 />
        </div>

        <div ref={setRef(SECTION_KEY.section8)}>
          <Section8 />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
