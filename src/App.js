import "./App.css";
import About from "./components/About";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
