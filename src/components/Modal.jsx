import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Modal({
	closeModal,
	opponents,
	handleDifficulty,
	handleOpponent,
	difficulty,
	handleTrickDifficulty,
	trickDifficulty,
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
					className="bg-[#100c08] text-white rounded-md p-6 shadow-lg flex-col justify-between"
					variants={modalVariants}
				>
					<h1 className="text-3xl mb-6 text-center font-noland tracking-wide">
						Settings
					</h1>

					<div className="flex-col items-center mb-6">
						<p className="mb-4 text-xl">Difficulty:</p>
						{/* <button className="border rounded-sm p-2">Don't Press me</button> */}
						<div className="flex justify-between w-full">
							<button
								className={`border border-white rounded-md px-4 py-1 ${
									difficulty === "easy"
										? "bg-white text-[#100c08]"
										: "bg-[#100c08] text-white"
								}`}
								id="easy"
								onClick={handleDifficulty}
							>
								Easy
							</button>
							<button
								className={`border border-white rounded-md px-4 py-1 ${
									difficulty === "medium"
										? "bg-white text-[#100c08]"
										: "bg-[#100c08] text-white"
								}`}
								id="medium"
								onClick={handleDifficulty}
							>
								Medium
							</button>
							<button
								className={`border border-white rounded-md px-4 py-1 ${
									difficulty === "hard"
										? "bg-white text-[#100c08]"
										: "bg-[#100c08] text-white"
								}`}
								id="hard"
								onClick={handleDifficulty}
							>
								Hard
							</button>
						</div>
					</div>

					<div className="flex-col items-center mb-6">
						<p className="mb-4 text-xl">Tricks:</p>
						<div className="flex justify-between w-full gap-2">
							<button
								className={`border border-white rounded-md px-2 py-1 ${
									trickDifficulty === "beginner"
										? "bg-white text-[#100c08]"
										: "bg-[#100c08] text-white"
								}`}
								id="beginner"
								onClick={handleTrickDifficulty}
							>
								Beginner
							</button>
							<button
								className={`border border-white rounded-md px-2 py-1 ${
									trickDifficulty === "intermediate"
										? "bg-white text-[#100c08]"
										: "bg-[#100c08] text-white"
								}`}
								id="intermediate"
								onClick={handleTrickDifficulty}
							>
								Intermediate
							</button>
							<button
								className={`border border-white rounded-md px-2 py-1 ${
									trickDifficulty === "advanced"
										? "bg-white text-[#100c08]"
										: "bg-[#100c08] text-white"
								}`}
								id="advanced"
								onClick={handleTrickDifficulty}
							>
								Advanced
							</button>
						</div>
					</div>

					<div className="flex-col items-center gap-2 mb-12">
						<p className="mb-4 text-xl">Opponent:</p>
						<div className="">
							<select
								className="text-black p-1 rounded-md w-full"
								onChange={handleOpponent}
							>
								{opponents &&
									opponents.map((opponent) => (
										<option key={opponent.value} value={opponent.value}>
											{opponent.value}
										</option>
									))}
							</select>
						</div>
						{/* <button className="border rounded-sm p-2">Press me</button> */}
					</div>

					<div className="flex items-center">
						<button
							className="w-1/2 border-2 rounded-md px-8 py-2 bg-[#e5771e] text-[#5a3d2b] font-bold border-[#5a3d2b] shadow-lg mx-auto"
							onClick={closeModal}
						>
							Update
						</button>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}

export default Modal;
