import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import useTrickData from "../hooks/useTrickData";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

export default function WarmUp() {
	const [trick, setTrick] = useState("");
	const [originalTrickList, setOriginalTrickList] = useState([]);
	const [trickList, setTrickList] = useTrickData();
	const [usedTricks, setUsedTricks] = useState([]);
	const [displayModal, setDisplayModal] = useState(false);
	const [selectedTrickAmount, setSelectedTrickAmount] = useState(5);

	useEffect(() => {
		// Only set originalTrickList once when it's empty.
		if (originalTrickList.length === 0 && trickList.length > 0) {
			setOriginalTrickList(trickList);
		}
	}, [trickList, originalTrickList]);

	const getRandomTrick = (tricks) => {
		if (tricks.length === 0) {
			console.log("No more tricks available");
			return;
		}

		const randomIndex = Math.floor(Math.random() * tricks.length);
		const item = tricks[randomIndex];
		setTrick(item);
		setUsedTricks((prevUsedTricks) => [...prevUsedTricks, item]);
		const updatedTricks = tricks.filter((_, index) => index !== randomIndex);
		setTrickList(updatedTricks);
	};

	let numberOfTricks = trickList.length;

	const handleNextTrick = () => {
		numberOfTricks -= 1;
		if (numberOfTricks === 0) {
			console.log("You got them all! Nice!");
			return;
		} else if (numberOfTricks > 0) {
			console.log(`${numberOfTricks} tricks remaining`);
			getRandomTrick(trickList);
		}
	};

	const handleModal = () => {
		setDisplayModal(!displayModal);
	};

	const shuffleArray = (array) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	const handleNumOfTricks = (e) => {
		const amount = parseInt(e.target.value);
		setSelectedTrickAmount(amount);

		const shuffled = shuffleArray(originalTrickList);
		const selectedTricks = shuffled.slice(0, amount);
		setTrickList(selectedTricks);
	};

	return (
		<div className="relative w-full bg-[#E8DCC5] text-[#100c08] h-screen">
			<Navbar />
			<div className="flex flex-col w-2/3 items-center justify-around py-6 px-4 bg-blue-100 mx-auto">
				<div className="font-roboto">
					<h1 className="text-3xl font-noland">Let's Get Physical</h1>
					<p>Select how many times you want to practice each trick.</p>
					<p>
						If you miss, start again from zero. If you land all - move on to the
						next trick.
					</p>
				</div>
				<button
					className="border-2 border-gray-700 rounded-md p-2 shadow-md my-4"
					onClick={handleModal}
				>
					Settings
				</button>
				<AnimatePresence>
					{displayModal && (
						<Modal
							closeModal={() => setDisplayModal(false)}
							originalTrickList={originalTrickList}
							handleNumOfTricks={handleNumOfTricks}
							selectedNumberOfTricks={selectedTrickAmount}
						/>
					)}
				</AnimatePresence>
				<div className="">
					<button
						className="border border-gray-700 px-2 py-1 rounded-md flex items-center"
						onClick={handleNextTrick}
					>
						Next Trick
						<FaAngleRight />
					</button>
				</div>
				<div className="">
					<h1>
						Land 3: <span className="font-noland text-2xl">{trick}'s</span>{" "}
					</h1>
				</div>
			</div>
		</div>
	);
}
