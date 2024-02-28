import { useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DifficultyPage from "./pages/DifficultyPage";
import Home from "./pages/Home";
import WarmUp from "./pages/WarmUp";

function App() {
  const [difficulty, setDifficulty] = useState("chill");

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };
  console.log(difficulty);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <DifficultyPage
              onDifficultyChange={handleDifficultyChange}
              difficulty={difficulty}
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/warm-up" element={<WarmUp />} />
      </Routes>
    </div>
  );
}

export default App;
