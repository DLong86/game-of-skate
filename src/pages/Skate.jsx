import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CpuSkateCard from "../components/CpuSkateCard";
import PlayerSkateCard from "../components/PlayerSkateCard";
import useBeginnerTrick from "../hooks/useBeginnerTrick";

// eslint-disable-next-line no-lone-blocks
{
	/*  --- NOTES ---
	1: Move state for settings up out of rock paper into parent - App ----- DONE!!! -----
	2: "Set trick" button needs to bring up a modal with a dropdown of tricks from db and a search bar ----- DONE!!! -----
	3: Whoever won the rock paper scissors needs to start and opacity turned off ----- DONE!!! -----
	4: if Offence then - a bail switches player, else - a letter is added. First to spell out SKATE loses
	   - Need state that switches between offensive and defensive
	   - If offensive and bail then no letter, if defensive and bail then a letter is added
	   - otherwise a make would switch player
	   - If defensive === true and bail, then add letter and switch player, else if !defensive and bail, no letter, defensive true, switch player
	   - need an icon or something to show who is offensive
	5: A make switches player without a letter added
*/
}

const baseChances = {
	easy: {
		easy: 0.7,
		medium: 0.5,
		hard: 0.25,
	},
	medium: {
		easy: 0.9,
		medium: 0.7,
		hard: 0.5,
	},
	hard: {
		easy: 0.95,
		medium: 0.8,
		hard: 0.7,
	},
};

function Skate({ gameSettings, result }) {
	const [currentPlayer, setCurrentPlayer] = useState(true);
	const { data: beginnerTricks, loading, error } = useBeginnerTrick();
	// const [selectedTrick, setSelectedTrick] = useState("");
	const [playerTrick, setPlayerTrick] = useState(null);
	const [cpuTrick, setCpuTrick] = useState(null);
	const [cpuLanded, setCpuLanded] = useState(null);
	const [defensive, setDefensive] = useState(true);

	console.log(defensive);

	useEffect(() => {
		if (result === "You Win") {
			setCurrentPlayer(true);
			setDefensive(false); // offensive
		} else if (result === "You Lose") {
			setCurrentPlayer(false);
			setDefensive(true); // defensive
		}
	}, [result]);

	const handleLandChance = (gameDifficulty, trickDifficulty) => {
		const chance = baseChances[gameDifficulty]?.[trickDifficulty];
		return chance ?? 0;
	};

	const handleSelectTrick = (e) => {
		if (!defensive) {
			// const selected = beginnerTricks.find(
			// 	(tricks) => tricks.trick === e.target.value
			// );
			// setPlayerTrick(selected || null);
			setPlayerTrick(e.target.value);
		}
	};

	const handlePlayerLandTrick = () => {
		setCurrentPlayer(!currentPlayer);
	};

	const handlePlayerBail = () => {
		if (!defensive) {
			// if player is offensive - cpu switches to offensiv
			setDefensive((prev) => !prev);
			setCurrentPlayer((prev) => !prev);
		} else {
			// if defensive - letter added
			setCurrentPlayer((prev) => !prev);
			// get letter - SKATE
		}
	};

	const handleCpuTurn = () => {
		if (!currentPlayer && beginnerTricks.length > 0) {
			const randomIndex = Math.floor(Math.random() * beginnerTricks.length);
			const selectedTrick = beginnerTricks[randomIndex];

			setCpuTrick(selectedTrick);

			const chance = handleLandChance(
				gameSettings.difficulty,
				selectedTrick.difficulty
			);

			const didLand = Math.random() < chance;
			setCpuLanded(didLand);

			if (defensive) {
				// which means defensive is true (player) so cpu is offensive
				if (didLand) {
					setCurrentPlayer(!currentPlayer);
					console.log("Laded, offensive", defensive);
					// setDefensive(true);
				} else {
					// if cpu is offensive and doesn't land
					setDefensive(false); // player becomes offensive
					console.log("was offensive but bailed trick", defensive);
					setCurrentPlayer(!currentPlayer);
				}
			} else {
				// defensive === false, which means player is offensive and cpu is defensive
				if (didLand) {
					setCurrentPlayer(!currentPlayer);
					console.log("defensive and did land", defensive);
				} else {
					console.log("defensive cpu and bailed so letter added", defensive);
					setCurrentPlayer(!currentPlayer);
				}
			}
		}
	};

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
					handleSelectTrick={handleSelectTrick}
					playerTrick={playerTrick}
					defensive={defensive}
					handlePlayerLandTrick={handlePlayerLandTrick}
					cpuTrick={cpuTrick}
					handlePlayerBail={handlePlayerBail}
				/>
				<CpuSkateCard
					gameSettings={gameSettings}
					currentPlayer={currentPlayer}
					trickList={beginnerTricks}
					handleLandChance={handleLandChance}
					defensive={defensive}
					cpuTrick={cpuTrick}
					playerTrick={playerTrick}
					cpuLanded={cpuLanded}
					handleCpuTurn={handleCpuTurn}
				/>
			</div>
		</div>
	);
}

export default Skate;
