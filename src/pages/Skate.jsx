import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CpuSkateCard from "../components/CpuSkateCard";
import PlayerSkateCard from "../components/PlayerSkateCard";
import useBeginnerTrick from "../hooks/useBeginnerTrick";

// eslint-disable-next-line no-lone-blocks
{
	/*  --- NOTES ---
	1: Move state for settings up out of rock paper into parent - App ----- DONE!!! -----
	2: "Set trick" button needs to bring up a modal with a dropdown of tricks from db and a search bar
	3: Whoever won the rock paper scissors needs to start and opacity turned off
	4: if Offence then - a bail switches player, else - a letter is added. First to spell out SKATE loses
	5: A make switches player without a letter added
*/
}

function Skate({ gameSettings, result }) {
	const [currentPlayer, setCurrentPlayer] = useState(true);
	const { data: beginnerTricks, loading, error } = useBeginnerTrick();

	useEffect(() => {
		result === "You Win" ? setCurrentPlayer(true) : setCurrentPlayer(false);
	}, [result]);

	console.log(currentPlayer);
	console.log(beginnerTricks);

	return (
		<div className="h-screen bg-[#e0dde5] text-[#100c08] m-0 pb-32">
			<div className="flex items-center justify-between p-2">
				<Link
					className="md:text-5xl text-4xl font-bold font-noland text-[#100c08]"
					to="/"
				>
					Skate App
				</Link>
				<button onClick={() => setCurrentPlayer(!currentPlayer)}>
					- switch -
				</button>
				<button className="border-2 border-[#100c08] rounded-full px-4 py-1 shadow-md  bg-gray-300/70">
					<Link to="/rock-paper-scissors">Back</Link>
				</button>
			</div>
			<div className="h-full md:flex">
				<PlayerSkateCard
					currentPlayer={currentPlayer}
					trickList={beginnerTricks}
				/>
				<CpuSkateCard
					gameSettings={gameSettings}
					currentPlayer={currentPlayer}
					trickList={beginnerTricks}
				/>
			</div>
		</div>
	);
}

export default Skate;
