import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/index.jsx";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

