import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header.js";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import "./App.scss";

function App() {
  const [DarkMode, setDarkMode] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header DarkMode={DarkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="videos/:videoId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
