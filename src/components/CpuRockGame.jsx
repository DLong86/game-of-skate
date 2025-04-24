import { useState } from "react";
import { GiRock } from "react-icons/gi";
import { TbToiletPaper } from "react-icons/tb";
import { LiaHandScissors } from "react-icons/lia";

// Two buttons - depending on outcome of rock paper scissors
// 1: to play rock paper scissors - If win or lose that button is disabled and the play skate button is active
// 2: If draw - play skate disabled but play rock paper scissors button active

function CpuRockGame({ header, choice, cpuRandomNum }) {
	const showChoice = () => {
		if (cpuRandomNum === "") {
			return "";
		}
		if (cpuRandomNum === 1) {
			return <GiRock />;
		}
		if (cpuRandomNum === 2) {
			return <TbToiletPaper />;
		}
		if (cpuRandomNum === 3) {
			return <LiaHandScissors />;
		}
	};
	return (
		<div className="border-2 border-black rounded-md p-2 w-1/2 mx-2">
			<h1 className="mb-4">{header}</h1>
			<h1>COUNTER</h1>
			{/* <div className="flex justify-between mb-8">
				<button
					id="rock"
					className="px-2 border border-black rounded-md"
					onClick={handleChoice}
				>
					Rock
				</button>
				<button
					id="paper"
					className="px-2 border border-black rounded-md"
					onClick={handleChoice}
				>
					Paper
				</button>
				<button
					id="scissors"
					className="px-2 border border-black rounded-md"
					onClick={handleChoice}
				>
					scissors
				</button>
			</div> */}
			<div className="flex justify-center">
				<h1 className="text-8xl">{showChoice()}</h1>
			</div>
		</div>
	);
}

export default CpuRockGame;
