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
							<div className="text-center body" key={index}>
								<h1 className="display-2 text-white pb-3">Bienvenido {item.nombre} </h1>
								<div className="container w-25 btn-group-vertical">
									<button
										type="button"
										onClick={() => history.push("/consulta")}
										className="btn btn-primary my-3 border">
										Consultas
									</button>
									<button
										type="button"
										onClick={() => history.push("/reserva")}
										className="btn btn-primary my-3 border">
										Reservas
									</button>
									<button
										type="button"
										onClick={() => actions.logout()}
										className="btn btn-primary my-3 border">
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
