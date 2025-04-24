import React from "react";

export default function Button({ text, onClick, value }) {
	return (
		<>
			<button
				className="font-noland tracking-wider font-semibold text-xl bg-[#e5771e] text-[#5a3d2b] border-4 border-[#5a3d2b] shadow-md rounded-md px-10 py-2 hover:opacity-50 duration-200"
				onClick={onClick}
				value={value}
			>
				{text}
			</button>
		</>
	);
}
