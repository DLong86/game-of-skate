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
					className="bg-[#e0dde5] text-[#100c08] rounded-md p-6 shadow-lg flex-col justify-between"
					variants={modalVariants}
				>
					<h1 className="text-3xl mb-6 text-center font-noland tracking-wide">
						Settings
					</h1>
					{/* #bfc489 */}

					<div className="flex-col items-center mb-6">
						<p className="mb-4 text-xl">Difficulty:</p>
						{/* <button className="border rounded-sm p-2">Don't Press me</button> */}
						<div className="flex justify-between w-full">
							<button
								className={`border border-[#100c08] rounded-full px-4 py-1 ${
									difficulty === "easy"
										? "bg-[#297a48] text-white"
										: "bg-[#bfc489] "
								}`}
								id="easy"
								onClick={handleDifficulty}
							>
								Easy
							</button>
							<button
								className={`border border-[#100c08] rounded-full px-4 py-1 ${
									difficulty === "medium"
										? "bg-[#297a48] text-white"
										: "bg-[#bfc489]"
								}`}
								id="medium"
								onClick={handleDifficulty}
							>
								Medium
							</button>
							<button
								className={`border border-[#100c08] rounded-full px-4 py-1 ${
									difficulty === "hard"
										? "bg-[#297a48] text-white"
										: "bg-[#bfc489]"
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
								className={`border border-[#100c08] rounded-full px-2 py-1 ${
									trickDifficulty === "beginner"
										? "bg-[#297a48] text-white"
										: "bg-[#bfc489]"
								}`}
								id="beginner"
								onClick={handleTrickDifficulty}
							>
								Beginner
							</button>
							<button
								className={`border border-[#100c08] rounded-full px-2 py-1 ${
									trickDifficulty === "intermediate"
										? "bg-[#297a48] text-white"
										: "bg-[#bfc489]"
								}`}
								id="intermediate"
								onClick={handleTrickDifficulty}
							>
								Intermediate
							</button>
							<button
								className={`border border-[#100c08] rounded-full px-2 py-1 ${
									trickDifficulty === "advanced"
										? "bg-[#297a48] text-white"
										: "bg-[#bfc489]"
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
								className="text-black p-2 rounded-full w-full outline-none bg-[#e0dde5] border border-black focus:bg-[#eae8ec]"
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
							className="w-1/2 border-2 rounded-full px-8 py-2 bg-[#e87dc6] text-[#100c08] font-noland uppercase font-bold border-[#100c08] shadow-xl mx-auto hover:bg-pink-200 duration-150"
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
