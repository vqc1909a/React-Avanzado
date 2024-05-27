import {NavLink, Navigate, Route, Routes} from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";


const LazyLayout = () => {
  // This is the way to work of Fernando Herrera, i mean, he uses the Routes component to load the child components, but i think that is not necessary, because the child components also can be loaded in the principal route, maybe he do it because to save memory and size files to the moment to running our application in the web 
  return (
		<div>
			<h1>LazyLayout Page</h1>

			<ul>
				<li>
					<NavLink to="lazy1">Lazy1</NavLink>
				</li>
				<li>
					<NavLink to="lazy2">Lazy2</NavLink>
				</li>
				<li>
					<NavLink to="lazy3">Lazy3</NavLink>
				</li>
			</ul>
			{/* Don't load the child components about dinamyc way and Suspense, because basically it will be the same way if would make it in the principal route, i mean for example the component LazyPage1 is loaded in the principal route, its chunked will be loaded there and not will loaded here in the secondary route and the other way around and the same for other routes here */}
      <Routes>
        <Route path="lazy1" element={<LazyPage1 />}></Route>
        <Route path="lazy2" element={<LazyPage2 />}></Route>
        <Route path="lazy3" element={<LazyPage3 />}></Route>
        <Route path="*" element={<Navigate to="lazy1" />}></Route>
      </Routes>
		</div>
	);
};

export default LazyLayout;
