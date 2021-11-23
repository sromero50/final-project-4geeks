import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import NotFound from "./component/notFound";
import { Home } from "./pages/home";
import { Consulta } from "./pages/consulta";
import injectContext from "./store/appContext";
import Quienes from "./pages/quienes";
import { Navbar } from "./component/navbar";
import Login from "./pages/login";
import Registro from "./pages/registro";
import Admin from "./pages/admin";
import Usuario from "./pages/usuario";
import { Empresa } from "./pages/empresa";
import { Context } from "./store/appContext";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/consulta">
							<Consulta />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/registrate">
							<Registro />
						</Route>
						<Route exact path="/quienes-somos">
							<Quienes />
						</Route>
						<Route exact path="/usuario">
							<Usuario />
						</Route>
						<Route exact path="/empresa">
							<Empresa />
						</Route>
						<Route exact path="/admin">
							<Admin />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
