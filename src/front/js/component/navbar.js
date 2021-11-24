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
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
								<>
									{store.info.map(item => {
										return (
											<li className="nav-item m-start" key={item.id}>
												<a className="nav-link" href="/usuario/">
													{item.nombre}
												</a>
											</li>
										);
									})}
									<></>
									<li className="nav-item">
										<a className="nav-link" href="/consulta/" onClick={() => actions.logout()}>
											Salir
										</a>
									</li>
								</>
							)}
							{!store.login && (
								<>
									<li className="nav-item">
										<a className="nav-link" href="/login/">
											Ingresa
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="/registrate/">
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
