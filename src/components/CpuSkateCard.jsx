import { useState } from "react";

function CpuSkateCard({ currentPlayer, gameSettings, trickList }) {
	const [trick, setTrick] = useState("");

	const handleTrickSelection = () => {
		if (trickList.length > 0) {
			const randomIndex = Math.floor(Math.random() * trickList.length);
			setTrick(trickList[randomIndex].trick);
		}
	};

	console.log(trick);

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
				{/* <h1 className="font-noland text-6xl tracking-wide m-0 p-0">Kickflip</h1> */}
			</div>
			<div className=" w-full flex justify-around">
				<button
					className="border-2 border-[#100c08] rounded-full px-8 py-1 shadow-md  bg-[#e87dc6]"
					onClick={handleTrickSelection}
				>
					Start
				</button>
			</div>
		</div>
	);
}

export default CpuSkateCard;
