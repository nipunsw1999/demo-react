import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compenents/pages/Home";
import Contact from "./compenents/pages/Contact";
import Header from "./compenents/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/demo-react" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
