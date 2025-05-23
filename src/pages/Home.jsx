import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import FancyButton from "../components/FancyButton";

export default function Home() {
	return (
		<div className="h-screen flex flex-col items-center md:justify-center justify-around bg-[#e0dde5] text-[#100c08] gap-12">
			{/* <h1 className="font-bauhaus flex">WELCOME</h1> */}
			<div className="">
				<Link
					className="md:text-5xl text-4xl font-bold font-noland text-[#100c08]"
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
					{/* <Button text="Play" /> */}
					<FancyButton />
				</Link>
			</div>
		</div>
	);
}
