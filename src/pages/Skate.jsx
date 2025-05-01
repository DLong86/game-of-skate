import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// eslint-disable-next-line no-lone-blocks
{
	/*  --- NOTES ---
	1: Move state for settings up out of rock paper into parent - App 
	2: "Set trick" button needs to bring up a modal with a dropdown of tricks from db and a search bar
	3: Whoever won the rock paper scissors needs to start and opacity turned off
	4: if Offence then - a bail switches player, else - a letter is added. First to spell out SKATE loses
	5: A make switches player without a letter added
*/
}

function Skate() {
	return (
		<div className="h-screen bg-[#E8DCC5] text-[#100c08] m-0 pb-32">
			<div className="flex items-center justify-between p-2">
				<Link
					className="md:text-5xl text-4xl font-bold font-magnifico text-[#5a3d2b]"
					to="/"
				>
					Skate App
				</Link>
				<button className="border-2 border-[#100c08] rounded-md px-4 py-1 shadow-md  bg-gray-300/70">
					<Link to="/rock-paper-scissors">Back</Link>
				</button>
			</div>
			<div className="h-full md:flex">
				<div className="h-1/2 md:h-full md:w-1/2 m-4 flex flex-col justify-between border-2 border-[#100c08] rounded-md shadow-lg items-center relative py-4 pt-2">
					<div className="">
						<h1 className="font-noland tracking-wide text-center">D Long</h1>
						<h1 className="text-5xl font-bold font-magnifico opacity-10 m-0 p-0">
							SKATE
						</h1>
					</div>
					<div className="">
						<h1 className="font-noland text-2xl tracking-wide m-0 p-0">
							Kickflip
						</h1>
					</div>
					<div className=" w-full flex justify-around">
						<button className="border-2 border-[#100c08] rounded-sm px-4 py-1 shadow-md  bg-green-700/50">
							Make
						</button>
						<button className="border-2 border-[#100c08] rounded-sm px-4 py-1 shadow-md  text-gray-800 bg-stone-500/70">
							Bail
						</button>
						<button className="border-2 border-[#100c08] rounded-sm px-4 py-1 shadow-md  bg-gray-300/70">
							Set Trick
						</button>
					</div>
				</div>
				<div className="h-1/2  md:h-full md:w-1/2 m-4 flex flex-col items-center opacity-20 border-2 border-[#100c08] rounded-md shadow-lg relative">
					{/* <div className="h-full m-4 bg-black z-50"></div> */}
					{/* Dynamically change skaters name from a list of pros */}
					<h1 className="font-noland tracking-wide">Shane O'Neill</h1>
					<h1 className="text-5xl font-bold font-magnifico opacity-10">
						SKATE
					</h1>
					{/* <div className="absolute bottom-4">
						<button className="border-2 border-[#100c08] rounded-sm px-4 py-1 shadow-md mx-4 bg-green-700/50">
							Make
						</button>
						<button className="border-2 border-[#100c08] rounded-sm px-4 py-1 shadow-md mx-4 text-gray-800 bg-stone-500/70">
							Bail
						</button>
						<button className="border-2 border-[#100c08] rounded-sm px-4 py-1 shadow-md mx-4 bg-gray-300/70">
							Set Trick
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Skate;
