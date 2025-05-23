import React from "react";
import { Link } from "react-router-dom";
import { CiSettings, CiLogin } from "react-icons/ci";

export default function Navbar() {
	return (
		<nav className="">
			<div className="">
				<Link className="text-4xl font-bold font-noland text-[#5a3d2b]" to="/">
					Skate App
				</Link>
			</div>
			<ul className="font-noland text-lg flex gap-4 items-center">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				{/* <li>
					<Link to="/login">
						<CiLogin />
					</Link>
				</li>
				<li>
					<Link to="/settings">
						<CiSettings />
					</Link>
				</li> */}
			</ul>
		</nav>
	);
}
