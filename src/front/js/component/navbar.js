import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="/">
						SmartTravel
					</a>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="/quienes-somos/">
									¿Quienes somos?
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/consulta/">
									Consulta de horarios
								</a>
							</li>
							{store.login && (
								<li className="nav-item">
									<a className="nav-link" href="/consulta/" onClick={() => actions.logout()}>
										Salir
									</a>
								</li>
							)}
							{!store.login && (
								<>
									<li className="nav-item">
										<a className="nav-link" href="/login/">
											Ingresá
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link " href="/registrate/">
											Registrate
										</a>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
