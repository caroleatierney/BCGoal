import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main"; // adjust path as needed

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<Main />} />
      {/* Add more routes here */}
    </Routes>
  );
}
