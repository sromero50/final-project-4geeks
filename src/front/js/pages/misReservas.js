import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
export const MisReservas = () => {
	const { store, actions } = useContext(Context);
	const [usuario, setUsuario] = useState();
	useEffect(() => {
		setUsuario(JSON.parse(localStorage.getItem("info")).usuario_id);
	}, []);

	return (
		<>
			{" "}
			{store.user && (
				<div className="text-center body">
					<h1 className="display-4 text-light ">Mis reservas</h1>

					{store.reservas.map(reserva => {
						return (
							<>
								{usuario == reserva.id_usuario ? (
									<div
										className="container border-secondary text-light p-3 mt-4 bg-dark border rounded reservas tabla"
										key={reserva.id}>
										{store.lineas.map(linea => {
											return (
												<>
													{store.horarios.map(horario => {
														return (
															<>
																{" "}
																{reserva.id_linea == linea.id ? (
																	<div className="border rounded border-secondary infoReserva my-2">
																		Linea: {linea.nombre_linea}
																	</div>
																) : null}
																{reserva.id_horario == horario.id ? (
																	<>
																		<div className="border rounded border-secondary infoReserva my-2">
																			Horario de salida: {horario.hora}
																		</div>
																		{reserva.asiento > 1 ? (
																			<div className="border rounded border-secondary infoReserva my-2">
																				Asientos: {reserva.asiento}
																			</div>
																		) : (
																			<div className="border rounded border-secondary infoReserva my-2">
																				Asiento: {reserva.asiento}
																			</div>
																		)}
																	</>
																) : null}
															</>
														);
													})}
												</>
											);
										})}
									</div>
								) : null}
							</>
						);
					})}
				</div>
			)}
		</>
	);
};
