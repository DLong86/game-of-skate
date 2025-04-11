import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Modal({
	closeModal,
	trickAttempts,
	handleTrickAttempts,
	originalTrickList,
	handleNumOfTricks,
	selectedNumberOfTricks,
}) {
	const modalRef = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				closeModal();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [closeModal]);

	// Framer animation variants
	const backdropVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};

	const modalVariants = {
		hidden: { opacity: 0, y: -40 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
	};

	const options = [
		{ value: 3, text: "3 Attempts" },
		{ value: 5, text: "5 Attempts" },
		{ value: 10, text: "10 Attempts" },
		{ value: 15, text: "15 Attempts" },
	];

	const trickAmountOptions = [
		{ value: 5, text: "5 Tricks" },
		{ value: 7, text: "7 Tricks" },
		{ value: 10, text: "10 Tricks" },
		{ value: 15, text: "15 Tricks" },
		{
			value: originalTrickList.length,
			text: `${originalTrickList.length} Tricks`,
		},
	];

	const difficultyOptions = [
		{ value: 1, text: "Chill" },
		{ value: 2, text: "Medium" },
		{ value: 3, text: "Pro" },
	];

	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-start pt-[10%] z-50"
				variants={backdropVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<motion.div
					ref={modalRef}
					className="bg-gray-500 w-[400px] rounded-md p-8 shadow-lg"
					variants={modalVariants}
				>
					<h1 className="text-2xl mb-4">Select Warmup options</h1>

					<div className="flex items-center gap-2 mb-2">
						<p>Difficulty:</p>
						{/* <button className="border rounded-sm p-2">Don't Press me</button> */}
						<select name="" id="">
							{difficultyOptions.map((option) => (
								<option key={option.value} value={option.value}>
									{option.text}
								</option>
							))}
						</select>
					</div>

					<div className="flex items-center gap-2 mb-2">
						<p>Number of tricks:</p>
						{/* <button className="border rounded-sm p-2">Press me</button> */}
						<select value={selectedNumberOfTricks} onChange={handleNumOfTricks}>
							{trickAmountOptions.map((option) => (
								<option key={option.value} value={option.value}>
									{option.text}
								</option>
							))}
						</select>
					</div>

					<div className="flex items-center gap-2 mb-2">
						<p>Trick attempts:</p>
						<div className="">
							<select value={trickAttempts} onChange={handleTrickAttempts}>
								{options.map((option) => (
									<option key={option.value} value={option.value}>
										{option.text}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="flex items-center justify-center gap-4 ">
						<button
							className="border rounded-sm px-8 py-2 flex items-center text-white bg-gray-700 shadow-lg"
							onClick={closeModal}
						>
							Update
						</button>
						<button
							className="border rounded-sm px-8 py-2 flex items-center text-white bg-gray-700 shadow-lg "
							onClick={closeModal}
						>
							Close
						</button>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}

export default Modal;
