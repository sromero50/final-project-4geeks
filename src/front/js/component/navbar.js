import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<nav className="navbar sticky-top navbar-expand-lg navbar navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="/">
						SmartTravel
						<i className="fas fa-bus ms-3" />
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

					<div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
						<ul className="navbar-nav ">
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
							{store.user && (
								<>
									<li className="nav-item">
										<a className="nav-link" href="/reserva/">
											Reservar
										</a>
									</li>
									<div className="form-inline">
										{store.info.map(item => {
											return (
												<li className="nav-item form-inline " key={item.id}>
													<a className="nav-link ms-1" href="/usuario/">
														{item.nombre}
													</a>
												</li>
											);
										})}
										<></>
										<li className="nav-item">
											<a className="nav-link ms-1" href="/" onClick={() => actions.logout()}>
												Salir
											</a>
										</li>
									</div>
								</>
							)}
							{store.admin && (
								<>
									<div className="form-inline">
										{store.info.map(item => {
											return (
												<li className="nav-item form-inline" key={item.id}>
													<a className="nav-link ms-1" href="/administrador/">
														{item.nombre}
													</a>
												</li>
											);
										})}
										<></>
										<li className="nav-item form-inline">
											<a className="nav-link ms-1" href="/" onClick={() => actions.logout()}>
												Salir
											</a>
										</li>
									</div>
								</>
							)}
							{store.empresa && (
								<div className="form-inline">
									{store.info.map(item => {
										return (
											<li className="nav-item m-start form-inline" key={item.id}>
												<a className="nav-link ms-1" href="/empresa">
													{item.nombre}
												</a>
											</li>
										);
									})}
									<></>
									<li className="nav-item form-inline">
										<a className="nav-link ms-1" href="/" onClick={() => actions.logout()}>
											Salir
										</a>
									</li>
								</div>
							)}
							{!store.login && (
								<div className="form-inline">
									<li className="nav-item">
										<a className="nav-link" href="/login/">
											Ingresa
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link ms-1" href="/registrate/">
											Registrate
										</a>
									</li>
								</div>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
