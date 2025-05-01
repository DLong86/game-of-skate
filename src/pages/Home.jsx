import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="h-screen flex flex-col items-center md:justify-center justify-around bg-[#E8DCC5] text-[#100c08] gap-12">
			{/* <h1 className="font-bauhaus flex">WELCOME</h1> */}
			<div className="">
				<Link
					className="md:text-5xl text-4xl font-bold font-magnifico text-[#e5771e]"
					to="/"
				>
					Skate App
				</Link>
			</div>
			<div className="flex flex-row gap-6">
				{/* <Link to="/warm-up">
					<Button text="Warm Up" />
				</Link> */}
				<Link to="/rock-paper-scissors">
					<Button text="Play" />
				</Link>
			</div>
		</div>
	);
}
