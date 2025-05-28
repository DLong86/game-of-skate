import { useState, useEffect } from "react";

function CpuSkateCard({
	currentPlayer,
	gameSettings,
	trickList,
	handleLandChance,
}) {
	const [trick, setTrick] = useState("");
	const [landed, setLanded] = useState(null);

	const handleCpuTurn = () => {
		if (!currentPlayer && trickList.length > 0) {
			const randomIndex = Math.floor(Math.random() * trickList.length);
			const selectedTrick = trickList[randomIndex];

			setTrick(selectedTrick);

			const chance = handleLandChance(
				gameSettings.difficulty,
				selectedTrick.difficulty
			);

			// 50% chance to land??? - might be too high or low --- need to test!!!!
			const didLand = Math.random() < chance;
			setLanded(didLand);
		}
	};

	return (
		<div
			className={`h-1/2 md:h-full md:w-1/2 m-4 flex flex-col justify-between border border-[#100c08] rounded-xl shadow-lg items-center relative py-4 pt-2 ${
				currentPlayer ? "opacity-20" : "opacity-100"
			} transition-opacity duration-500 ease-in-out`}
		>
			<div className="">
				<h1 className="font-noland tracking-wide text-center text-2xl pb-4">
					{gameSettings.opponent}
				</h1>
				<h1 className="text-5xl font-bold font-magnifico opacity-10 m-0 p-0 z-50">
					SKATE
				</h1>
			</div>
			<div className="">
				<h1 className="font-noland text-6xl tracking-wide m-0 p-0">
					{trick.trick || "Press Start"}
				</h1>
			</div>

			<div className="">
				{landed === true && <p className="">Landed!</p>}{" "}
				{landed === false && <p className="">Bailed!</p>}
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
