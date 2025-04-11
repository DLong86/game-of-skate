import React from "react";
import { Link } from "react-router-dom";
import { CiSettings, CiLogin } from "react-icons/ci";

export default function Navbar() {
	return (
		<nav className="">
			<div className="">
				<Link className="text-xl font-bold" to="/">
					Skate App
				</Link>
			</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/login">
						<CiLogin />
					</Link>
				</li>
				<li>
					<Link to="/settings">
						<CiSettings />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
