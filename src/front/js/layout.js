import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Consulta } from "./pages/consulta";
import injectContext from "./store/appContext";
import Quienes from "./pages/quienes";
import { Navbar } from "./component/navbar";
import Login from "./pages/login";
import Registro from "./pages/registro";
import Admin from "./pages/admin";
import AuthProvider from "./Auth/authProvider";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<AuthProvider>
						<Navbar />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/consulta">
								<Consulta />
							</Route>
							<Route exact path="/single/:theid">
								<Single />
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

							<Route exact path="/admin">
								<Admin />
							</Route>

							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
					</AuthProvider>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
