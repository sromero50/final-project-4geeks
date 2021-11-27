import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import NotFound from "./component/notFound";
import { Home } from "./pages/home";
import { Consulta } from "./pages/consulta";
import injectContext from "./store/appContext";
import Quienes from "./pages/quienes";
import { Navbar } from "./component/navbar";
import Footer from "./component/footer";
import Login from "./pages/login";
import Registro from "./pages/registro";
import Admin from "./pages/admin";
import Usuario from "./pages/usuario";
import { MisReservas } from "./pages/misReservas";
import { Reserva } from "./pages/reserva";
import { Empresa } from "./pages/empresa";
import { Context } from "./store/appContext";
import Confirmacion from "./pages/confirmacion";
import RecuperarPassword from "./pages/recuperarPassword";
import NuevaContraseña from "./pages/nuevaContraseña";
import Prueba from "./pages/prueba";
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
						<Route exact path="/prueba">
							<Prueba />
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
						<Route exact path="/reserva">
							<Reserva />
						</Route>
						<Route exact path="/confirmacion">
							<Confirmacion />
						</Route>
						<Route exact path="/misreservas">
							<MisReservas />
						</Route>
						<Route exact path="/recuperar">
							<RecuperarPassword />
						</Route>
						<Route exact path="/resetcontraseña/:token">
							<NuevaContraseña />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
