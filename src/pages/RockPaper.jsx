import { useState } from "react";
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
	{ id: 15, value: "Etienne Cagny" },
];

function RockPaper() {
	const [displayModal, setDisplayModal] = useState(true);
	const [difficulty, setDifficulty] = useState("easy");
	const [opponent, setOpponent] = useState("Random");
	const [trickDifficulty, setTrickDifficulty] = useState("beginner");
	const [disabled, setDisabled] = useState(true);
	const [choice, setChoice] = useState("");
	const [cpuRandomNum, setCpuRandomNum] = useState();

	const handleChoice = (e) => {
		setChoice(e.target.id);
	};

	const handleModal = () => {
		setDisplayModal(!displayModal);
	};

	const handleDifficulty = (e) => {
		if (e.target.id === "easy") {
			setDifficulty("easy");
		}

		if (e.target.id === "medium") {
			setDifficulty("medium");
		}

		if (e.target.id === "hard") {
			setDifficulty("hard");
		}
	};

	const handleTrickDifficulty = (e) => {
		if (e.target.id === "beginner") {
			setTrickDifficulty("beginner");
		}

		if (e.target.id === "intermediate") {
			setTrickDifficulty("intermediate");
		}

		if (e.target.id === "advanced") {
			setTrickDifficulty("advanced");
		}
	};

	const handleOpponent = (e) => {
		if (e.target.value === "Random") {
			const randomIndex = Math.floor(Math.random() * opponents.length);
			const randomOpponent = opponents[randomIndex].value;
			setOpponent(randomOpponent);
		} else {
			setOpponent(e.target.value);
		}
	};

	const handleCpuNumber = () => {
		const num = Math.floor(Math.random() * 3);
		setCpuRandomNum(num + 1);
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

			<button onClick={handleModal}>Settings</button>
			<AnimatePresence>
				{displayModal && (
					<Modal
						closeModal={() => setDisplayModal(false)}
						opponents={opponents}
						handleDifficulty={handleDifficulty}
						handleTrickDifficulty={handleTrickDifficulty}
						handleOpponent={handleOpponent}
						difficulty={difficulty}
						trickDifficulty={trickDifficulty}
					/>
				)}
			</AnimatePresence>
			<div className="">
				<h1>Difficulty: {difficulty}</h1>
				<h1>Trick Level: {trickDifficulty}</h1>
				<h1>Opponent: {opponent}</h1>
			</div>
			<div className="flex justify-center gap-2">
				<RockPaperGame
					header="You"
					choice={choice}
					handleChoice={handleChoice}
				/>
				<CpuRockGame header={opponent} cpuRandomNum={cpuRandomNum} />
			</div>
			<div className="w-1/4 mx-auto flex flex-col gap-2 justify-center mt-10">
				<button
					className="px-2 border border-black rounded-md"
					onClick={handleCpuNumber}
				>
					Shoot
				</button>
				<button
					className={`px-2 border border-black rounded-md ${
						disabled ? "opacity-10" : "opacity-100"
					}`}
					disabled={disabled}
				>
					Play
				</button>
			</div>
		</div>
	);
}

export default RockPaper;
