import { useState, useEffect } from "react";
import { TbSkateboarding } from "react-icons/tb";

function CpuSkateCard({
	currentPlayer,
	gameSettings,
	trickList,
	defensive,
	cpuTrick,
	playerTrick,
	cpuLanded,
	handleCpuTurn,
}) {
	// Might need to move this state and function for the handleTurn up
	// const [trick, setTrick] = useState("");
	// const [landed, setLanded] = useState(null);

	// const handleCpuTurn = () => {
	// 	if (!currentPlayer && trickList.length > 0) {
	// 		const randomIndex = Math.floor(Math.random() * trickList.length);
	// 		const selectedTrick = trickList[randomIndex];

	// 		setTrick(selectedTrick);
	// 		if (defensive) {
	// 			setCpuTrick(selectedTrick);
	// 		}

	// 		const chance = handleLandChance(
	// 			gameSettings.difficulty,
	// 			selectedTrick.difficulty
	// 		);

	// 		// 50% chance to land??? - might be too high or low --- need to test!!!!
	// 		const didLand = Math.random() < chance;
	// 		setLanded(didLand);
	// 	}
	// };

	return (
		<div
			className={`h-1/2 md:h-full md:w-1/2 m-4 flex flex-col justify-between border border-[#100c08] rounded-xl shadow-lg items-center relative py-4 pt-2 ${
				currentPlayer ? "opacity-20" : "opacity-100"
			} transition-opacity duration-1000 ease-in-out`}
		>
			<div className="w-full text-xl relative">
				<h1 className="font-noland tracking-wide pb-4 flex items-center justify-between gap-4 px-4">
					{gameSettings.opponent}
					{defensive && <TbSkateboarding className="text-green-600" />}
				</h1>
				<h1 className="text-5xl font-bold font-magnifico opacity-10 m-0 p-0 z-50 text-center">
					SKATE
				</h1>
			</div>
			<div className="">
				<h1 className="font-noland text-6xl tracking-wide m-0 p-0">
					{defensive && !currentPlayer
						? cpuTrick?.trick || "Press Start"
						: playerTrick || ""}
				</h1>
			</div>

			<div className="absolute z-40 oppacity-100">
				{cpuLanded === true && <p className="">Landed!</p>}{" "}
				{cpuLanded === false && <p className="">Bailed!</p>}
			</div>

			<div className=" w-full flex justify-around">
				<button
					className="border-2 border-[#100c08] rounded-full px-8 py-1 shadow-md  bg-[#e87dc6]"
					onClick={handleCpuTurn}
				>
					Start
				</button>
			</div>
		</div>
	);
}

export default CpuSkateCard;
