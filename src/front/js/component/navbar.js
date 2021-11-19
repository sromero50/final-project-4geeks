import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Auth/authContext";
export const Navbar = () => {
	const auth = useContext(AuthContext);
	return (
		<AuthContext.Consumer>
			{context => (
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
									{context.login && (
										<li className="nav-item">
											<button className="nav-link btn" onClick={() => auth.logout()}>
												Salir
											</button>
										</li>
									)}
									{!context.login && (
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
			)}
		</AuthContext.Consumer>
	);
};
