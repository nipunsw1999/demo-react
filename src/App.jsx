import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compenents/pages/Home";
import Contact from "./compenents/pages/Contact";

function App() {
  return (
    <>
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
