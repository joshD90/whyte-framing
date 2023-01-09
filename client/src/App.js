import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homepage/Home";
import Enquire from "./pages/enquire/Enquire";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
