import { useState } from "react";

const BurgerMenu = ({
	difficulty,
	trickDifficulty,
	opponent,
	setDisplayModal,
	displayModal,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Burger Menu */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed top-3 right-3 z-50 w-10 h-10 flex items-center justify-center"
			>
				{/* Top Bar */}
				<span
					className={`absolute h-1 w-8 bg-black rounded transition-transform duration-300 ${
						isOpen ? "rotate-45" : "-translate-y-2"
					}`}
				/>
				{/* Bottom Bar */}
				<span
					className={`absolute h-1 w-8 bg-black rounded transition-transform duration-300 ${
						isOpen ? "-rotate-45" : "translate-y-2"
					}`}
				/>
			</button>

			{/* Dropdown */}
			<div
				className={`fixed top-0 left-0 w-full  bg-white shadow-lg z-40 transition-transform duration-500 ease-in-out ${
					isOpen ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<nav className="flex flex-col p-2 pt-20 pb-6 h-full space-y-6 text-4xl font-noland">
					<h1>Difficulty: {difficulty}</h1>
					<h1>Trick Level: {trickDifficulty}</h1>
					<h1>Opponent: {opponent}</h1>
					<h1
						className="text-[#297a48] txt-xl hover:opacity-50 duration-150 cursor-pointer underline"
						onClick={() => setDisplayModal(!displayModal)}
					>
						Settings
					</h1>
				</nav>
			</div>
		</>
	);
};

export default BurgerMenu;
