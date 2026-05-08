import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main"; // adjust path as needed
import BCLogo from "./Images/BCLogo.png";

export default function App() {
  return (
    // <div
    //   style={{ backgroundImage: `url(${BCLogo})` }}
    //   className="bg-repeat min-h-screen"
    // >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Main />} />
        {/* Add more routes here */}
      </Routes>
    // </div>
  );
}
