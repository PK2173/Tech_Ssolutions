import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/headre/Header";
import Home from "./Components/home/Home";
import Footer from "./Components/footer/Footer";
import Contact from "./Components/contect/Contact";
import Services from "./Components/services/Services";
import "./Components/mediaquery/mediaquery.css";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;
