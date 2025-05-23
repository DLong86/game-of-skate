import React from "react";

function PlayerSkateCard({ currentPlayer, trickList }) {
	return (
		<div
			className={`h-1/2 md:h-full md:w-1/2 m-4 flex flex-col justify-between border border-[#100c08] rounded-xl shadow-lg items-center relative py-4 pt-2 ${
				!currentPlayer ? "opacity-20" : "opacity-100"
			} transition-opacity duration-500 ease-in-out`}
		>
			<div className="">
				<h1 className="font-noland tracking-wide text-center text-2xl pb-4">
					D Long
				</h1>
				<h1 className="text-5xl font-bold font-magnifico opacity-10 m-0 p-0 z-50">
					SKATE
				</h1>
			</div>
			<div className="">
				<h1 className="font-noland text-6xl tracking-wide m-0 p-0">Kickflip</h1>
			</div>
			<div className=" w-full flex justify-between px-4">
				<div className="flex gap-4">
					<button className="border-2 border-[#100c08] rounded-full px-4 py-1 shadow-md  bg-[#e87dc6]">
						Make
					</button>
					<button className="border-2 border-[#100c08] rounded-full px-4 py-1 shadow-md  text-gray-800 bg-[#bfc489]">
						Bail
					</button>
				</div>
				<select className="border-2 border-[#100c08] rounded-mdpx-4 py-1 shadow-md ">
					<option value="">Trick List</option>
					{trickList.map((trick) => (
						<option key={trick.id} value={trick.trick}>
							{trick.trick}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default PlayerSkateCard;
