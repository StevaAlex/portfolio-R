import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects"; 
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/projects" element={<Projects/>}/> 
      <Route path="/contact" element={<Contact/>}/> 
    </Routes>
  );
}

export default App;
