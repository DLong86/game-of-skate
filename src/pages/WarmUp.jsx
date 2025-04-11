import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import useTrickData from "../hooks/useTrickData";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { AnimatePresence } from "framer-motion";

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
		<div className="relative w-full">
			<div>
				<h1>Let's Get Physical</h1>
				<p>Select how many times you want to practice each trick</p>
				<p>
					If you miss, start again from zero. If you land all - move on to the
					next trick.
				</p>
			</div>
			<button className="border rounded-md p-2 shadow-md" onClick={handleModal}>
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

			<div className="flex gap-2">
				<button
					className="border rounded-md flex items-center"
					onClick={handleNextTrick}
				>
					Next Trick
					<FaAngleRight />
				</button>
				<Link className="border rounded-md flex items-center" to="/">
					<IoIosArrowBack />
					Back
				</Link>
			</div>
			<div className="">
				<h1>Land 3: {trick}'s </h1>
			</div>
		</div>
	);
}
