export default function FancyButton() {
	return (
		<div className="relative inline-block group">
			{/* Green Layer */}
			<span className="absolute bottom-[-8px] left-[8px] bg-[#2c7948] w-full h-full rounded-full z-0 "></span>
			{/* Black Layer */}
			<span className="absolute bottom-[-2px] left-[2px] bg-black w-full h-full rounded-full z-0"></span>
			{/* Main Pink Button */}
			<button className="relative bg-[#e87dc6] text-black font-noland tracking-wider px-6 py-2 rounded-full z-10 border border-black hover:bg-pink-300 duration-150">
				PLAY
			</button>
		</div>
	);
}
