import { Routes, Route } from "react-router-dom";
import About from "./Components/About"; // adjust path as needed

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      {/* Add more routes here */}
    </Routes>
  );
}
