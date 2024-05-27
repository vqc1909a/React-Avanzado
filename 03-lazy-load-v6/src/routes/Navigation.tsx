import React, {Suspense} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import {routes} from "./routes";

export const Navigation = () => {
	return (
		<Router>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						{/* Create NavLinks dynamics */}
						{routes.map((route) => (
							<li key={route.to}>
								<NavLink
									to={route.to}
									className={({isActive}) => (isActive ? "nav-active" : "")}
								>
									{route.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						{routes.map((route) => (
							<Route
								key={route.to}
								path={route.path}
								element={<route.Component />}
							/>
						))}
						<Route
							path="*"
							element={<Navigate to={routes[0].to} replace />}
						></Route>
					</Routes>
				</Suspense>
			</div>
		</Router>
	);
};
