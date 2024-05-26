import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Navigate,
} from "react-router-dom";
import logo from "../logo.svg";

export const Navigation = () => {
	return (
		<Router>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink
								to="/"
								className={({isActive}) => (isActive ? "nav-active" : "")}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({isActive}) => (isActive ? "nav-active" : "")}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className={({isActive}) => (isActive ? "nav-active" : "")}
							>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<h1>Home</h1>} />
					<Route path="about" element={<h1>About</h1>} />
					<Route path="users" element={<h1>Users</h1>} />
					<Route path="*" element={<Navigate to="/" replace />}></Route>
				</Routes>
			</div>
		</Router>
	);
};
