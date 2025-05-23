import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";
import RockPaperGame from "../components/RockPaperGame";
import CpuRockGame from "../components/CpuRockGame";
import BurgerMenu from "../components/BurgerMenu";

function RockPaper({
	gameSettings,
	setGameSettings,
	result,
	setResult,
	opponents,
}) {
	const [displayModal, setDisplayModal] = useState(true);
	const [choice, setChoice] = useState("");
	const [cpuRandomNum, setCpuRandomNum] = useState();
	const [countdown, setCountdown] = useState(null);

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
			<div className="flex items-center justify-between p-2">
				<Link
					className="md:text-5xl text-4xl font-bold font-noland text-[#100c08] z-50"
					to="/"
				>
					Skate App
				</Link>

				<BurgerMenu
					difficulty={gameSettings.difficulty}
					trickDifficulty={gameSettings.trickDifficulty}
					opponent={gameSettings.opponent}
					setDisplayModal={setDisplayModal}
					displayModal={displayModal}
				/>
			</div>

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

			<div className="flex flex-col lg:flex-row justify-center gap-2  pt-10">
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
			<h1 className="text-6xl font-bold font-noland tracking-wide text-center mt-12 drop-shadow-md">
				{result}
			</h1>
			<div className="w-2/3 lg:w-1/4 mx-auto flex lg:flex-col gap-4 justify-center mt-10 ">
				<button
					className={`p-2 border border-black bg-[#bfc489] rounded-full w-1/2 mx-auto ${
						!choice || (result && result !== "Draw")
							? "opacity-10"
							: "opacity-100"
					}`}
					disabled={!choice || (result && result !== "Draw")}
					onClick={handleCpuNumber}
				>
					Shoot
				</button>

				<Link className="w-1/2 mx-auto" to="/Skate">
					<button
						className={`p-2 border border-black bg-[#e87dc6] w-full rounded-full ${
							result === "Draw" || !result ? "opacity-10" : "opacity-100"
						}`}
						disabled={!result || result === "Draw"}
					>
						Play
					</button>
				</Link>
				<button
					className="px-2 border border-black rounded-full w-1/2 mx-auto"
					onClick={handleReset}
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default RockPaper;
