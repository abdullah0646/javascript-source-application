import "./App.css";
import Header from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./base/Footer";


function App() {
  return (
    <div className="bg-dark" 
    // style={{ minheight: window.innerHeight }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/javascript" element={<Header />} />
          <Route path="/:url" element={<Header />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
