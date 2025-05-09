import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DifficultyPage from "./pages/DifficultyPage";
import Home from "./pages/Home";
import WarmUp from "./pages/WarmUp";
import Skate from "./pages/Skate";
import RockPaper from "./pages/RockPaper";

function App() {
	const [difficulty, setDifficulty] = useState("chill");

	const handleDifficultyChange = (newDifficulty) => {
		setDifficulty(newDifficulty);
	};
	console.log(difficulty);

	return (
		<div className="">
			{/* <Navbar /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/difficulty"
					element={
						<DifficultyPage
							onDifficultyChange={handleDifficultyChange}
							difficulty={difficulty}
						/>
					}
				/>
				<Route path="/warm-up" element={<WarmUp />} />
				<Route path="/rock-paper-scissors" element={<RockPaper />} />
				<Route path="/skate" element={<Skate />} />
			</Routes>
		</div>
	);
}

export default App;
