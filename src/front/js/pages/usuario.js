import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import Loading from "../component/loading";
import NotFound from "../component/notFound";
const Usuario = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	console.log(store.info);
	return (
		<Loading active={store.user}>
			{store.user && (
				<>
					{store.info.map((item, index) => {
						return (
							<div className="text-center container" key={index}>
								<h1 className="display-2 text-white p-5">Bienvenido {item.nombre} </h1>
								<div className="col-md-6 p-5 bg-dark btn-group-vertical border rounded border-dark ">
									<button
										type="button"
										onClick={() => history.push("/consulta")}
										className="btn userBotones col-ms tabla text-light my-3 border rounded border-dark">
										Consultar horario
									</button>
									<button
										type="button"
										onClick={() => history.push("/reserva")}
										className="btn userBotones col-ms tabla text-light my-3 border rounded border-dark">
										Realizar una reserva
									</button>
									<button
										type="button"
										onClick={() => history.push("/misreservas")}
										className="btn userBotones col-ms tabla text-light my-3 border rounded border-dark">
										Mis reservas
									</button>
									<button
										type="button"
										onClick={() => actions.logout()}
										className="btn userBotones col-ms tabla text-light my-3 border rounded border-dark">
										Salir
									</button>
								</div>
							</div>
						);
					})}
				</>
			)}
			{!store.user && <NotFound />}
		</Loading>
	);
};

export default Usuario;
