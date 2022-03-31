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

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="app-content">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
