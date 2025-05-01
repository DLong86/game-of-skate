import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";
import RockPaperGame from "../components/RockPaperGame";
import CpuRockGame from "../components/CpuRockGame";

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

function RockPaper() {
	const [displayModal, setDisplayModal] = useState(true);
	const [gameSettings, setGameSettings] = useState({
		difficulty: "easy",
		opponent: "Random",
		trickDifficulty: "beginner",
	});
	const [choice, setChoice] = useState("");
	const [cpuRandomNum, setCpuRandomNum] = useState();
	const [countdown, setCountdown] = useState(null);
	const [result, setResult] = useState("");

	const handleChoice = (e) => {
		setChoice(e.target.id);
		setCpuRandomNum(null);
	};

	function handleSettings(key) {
		return function (e) {
			setGameSettings((prev) => ({
				...prev,
				[key]: e.target.id || e.target.value,
			}));
		};
	}

	const handleCpuNumber = () => {
		setCountdown(3);

		const interval = setInterval(() => {
			setCountdown((prev) => {
				if (prev === 1) {
					clearInterval(interval); // Stop when reaching 1
					setCountdown(null);
					const num = Math.floor(Math.random() * 3);
					setCpuRandomNum(num + 1);
				}
				return prev - 1; // decrease countdown
			});
		}, 500);
	};

	// 1 = rock, 2 = paper, 3 = scissors
	useEffect(() => {
		const handleWinner = () => {
			if (choice !== "" && cpuRandomNum)
				if (choice === "rock" && cpuRandomNum === 1) {
					setResult("Draw");
				} else if (choice === "rock" && cpuRandomNum === 2) {
					setResult("You Lose");
				} else if (choice === "rock" && cpuRandomNum === 3) {
					setResult("You Win");
				} else if (choice === "paper" && cpuRandomNum === 1) {
					setResult("You Win");
				} else if (choice === "paper" && cpuRandomNum === 2) {
					setResult("Draw");
				} else if (choice === "paper" && cpuRandomNum === 3) {
					setResult("You Lose");
				} else if (choice === "scissors" && cpuRandomNum === 1) {
					setResult("You Lose");
				} else if (choice === "scissors" && cpuRandomNum === 2) {
					setResult("You Win");
				} else if (choice === "scissors" && cpuRandomNum === 3) {
					setResult("Draw");
				} else {
					console.log(null);
				}
		};
		handleWinner();
	}, [choice, cpuRandomNum]);

	console.log(result);

	const handleReset = () => {
		setChoice("");
		setCpuRandomNum();
		setResult("");
		setCountdown(null);
	};

	return (
		<div className="h-screen text-[#100c08]">
			<div className="">
				<Link
					className="md:text-5xl text-4xl font-bold font-magnifico text-[#5a3d2b]"
					to="/"
				>
					Skate App
				</Link>
			</div>

			<button onClick={() => setDisplayModal(!displayModal)}>Settings</button>
			<AnimatePresence>
				{displayModal && (
					<Modal
						closeModal={() => setDisplayModal(false)}
						opponents={opponents}
						handleDifficulty={handleSettings("difficulty")}
						handleTrickDifficulty={handleSettings("trickDifficulty")}
						handleOpponent={handleSettings("opponent")}
						difficulty={gameSettings.difficulty}
						trickDifficulty={gameSettings.trickDifficulty}
					/>
				)}
			</AnimatePresence>
			<div className="">
				<h1>Difficulty: {gameSettings.difficulty}</h1>
				<h1>Trick Level: {gameSettings.trickDifficulty}</h1>
				<h1>Opponent: {gameSettings.opponent}</h1>
			</div>
			<div className="flex justify-center gap-2">
				<RockPaperGame
					header="You"
					choice={choice}
					handleChoice={handleChoice}
				/>
				<CpuRockGame
					header={gameSettings.opponent}
					cpuRandomNum={cpuRandomNum}
					countdown={countdown}
				/>
			</div>
			<h1 className="text-6xl text-[#e5771e] font-bold font-noland tracking-wide text-center mt-12">
				{result}
			</h1>
			<div className="w-1/4 mx-auto flex flex-col gap-2 justify-center mt-10">
				<button
					className={`px-2 border border-black rounded-md ${
						!choice || (result && result !== "Draw")
							? "opacity-10"
							: "opacity-100"
					}`}
					disabled={!choice || (result && result !== "Draw")}
					onClick={handleCpuNumber}
				>
					Shoot
				</button>
				<button
					className={`px-2 border border-black rounded-md ${
						result === "Draw" || !result ? "opacity-10" : "opacity-100"
					}`}
					disabled={!result || result === "Draw"}
				>
					<Link to="/Skate">Play</Link>
				</button>
				<button
					className="px-2 border border-black rounded-md"
					onClick={handleReset}
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default RockPaper;
