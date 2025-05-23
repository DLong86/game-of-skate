import React from "react";

export default function Button({ text, onClick, value }) {
	return (
		<>
			<button
				className="font-noland tracking-wider font-semibold text-xl bg-[#e87dc6] text-[#5a3d2b] border-2 border-[#100c08] shadow-2xl rounded-full px-10 py-2 hover:opacity-50 duration-200"
				onClick={onClick}
				value={value}
			>
				{text}
			</button>
		</>
	);
}
