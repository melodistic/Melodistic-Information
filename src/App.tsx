import Header from "./components/header/Header";
import Menubar from "./components/header/Menubar";
import Section1 from "./components/section1/Section1";
const App = () => {
  return (
    <div className="App">
      <Menubar />
      <Header />
      <Section1 />
    </div>
  );
};

export default App;
