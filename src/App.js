import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./routes/section";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
}

export default App;
