import {lazy} from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type FC = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	//Componente with lazy load or a normal component, i mean a function component
	Component: React.LazyExoticComponent<FC> | FC;
	name: string;
}

const LazyPage1 = lazy(
	() =>
		import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
);
const LazyPage2 = lazy(
	() =>
		import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const LazyPage3 = lazy(
	() =>
		import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);

const LazyLayout = lazy(
	() =>
		import(
			/* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
		)
);

export const routes: Route[] = [
	{
		to: "/lazy1",
		path: "lazy1",
		Component: LazyPage1,
		name: "Lazy-1",
	},
	{
		to: "/lazy2",
		path: "lazy2",
		Component: LazyPage2,
		name: "Lazy-2",
	},
	{
		to: "/lazy3",
		path: "lazy3",
		Component: LazyPage3,
		name: "Lazy-3",
	},
	{
		to: "/lazy-layout",
		path: "lazy-layout/*",
		Component: LazyLayout,
		name: "Lazy Layout",
	},
	{
		to: "/no-lazy",
		path: "no-lazy",
		Component: NoLazy,
		name: "No Lazy",
	},
];
