import "./css/index.scss";
import Menu from "./component/Menu.jsx";
import Download from "./component/Section2";
import Section1 from "./component/Section1";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Section5 from "./component/Section5";
import Section7 from "./component/Section7";
import Section8 from "./component/Section8";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="app-content">
        <Section1 />

        {/* <Section2 />
        <Section3 /> */}
      </div>
      {/* <Section4 /> */}
      <Section5 />
      {/* <Section7 /> */}
      {/* <Section8 /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
