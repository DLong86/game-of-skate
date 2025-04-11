import React from "react";

export default function Button({ text, onClick, value }) {
	return (
		<>
			<button
				className="border rounded-md px-2"
				onClick={onClick}
				value={value}
			>
				{text}
			</button>
		</>
	);
}
