import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import WarmUp from "./pages/WarmUp";
import Skate from "./pages/Skate";
import RockPaper from "./pages/RockPaper";

const opponents = [
	{ id: 0, value: "Random" },
	{ id: 1, value: "Shane O'Neill" },
	{ id: 2, value: "Max Palmer" },
	{ id: 3, value: `Kevin "Spanky" Long` },
	{ id: 4, value: "Yuto Horigome" },
	{ id: 5, value: "Louie Lopez" },
	{ id: 6, value: "Aaron Herrington" },
	{ id: 7, value: "Alexis Sablone" },
	{ id: 8, value: "Stu Kirst" },
	{ id: 9, value: "Rowan Davis" },
	{ id: 10, value: "Chewy Cannon" },
	{ id: 11, value: "Ishod Weir" },
	{ id: 12, value: "Bryan Herman" },
	{ id: 13, value: "Geoff Rowley" },
	{ id: 14, value: "Dustin Henry" },
];

function App() {
	const [gameSettings, setGameSettings] = useState({
		difficulty: "easy",
		opponent: "Random",
		trickDifficulty: "beginner",
	});
	const [result, setResult] = useState("");

	return (
		<div className="">
			{/* <Navbar /> */}
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/warm-up" element={<WarmUp />} />
				<Route
					path="/rock-paper-scissors"
					element={
						<RockPaper
							gameSettings={gameSettings}
							setGameSettings={setGameSettings}
							result={result}
							setResult={setResult}
							opponents={opponents}
						/>
					}
				/>
				<Route
					path="/skate"
					element={<Skate gameSettings={gameSettings} result={result} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
