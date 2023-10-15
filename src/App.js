
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/service" element={<Service />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
