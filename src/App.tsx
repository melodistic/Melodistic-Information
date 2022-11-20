import Header from "./components/header/Header";
import Menubar from "./components/header/Menubar";
import ToTop from "./components/header/ToTop";
import Section1 from "./components/section1/Section1";
const App = () => {
  return (
    <div className="App">
      <Menubar />
      <ToTop />
      <Header />
      <Section1 />
    </div>
  );
};

export default App;
