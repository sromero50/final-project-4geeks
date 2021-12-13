import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Confirmacion = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="pb-3">
			<div className="ms-4 form-inline">
				<i className="fas fa-chevron-left me-2 iconoAtras" />
				<Link to="/reserva" className="irAtras text-light p-3">
					{" "}
					Hacer otra reserva{" "}
				</Link>
			</div>
			<h1 className="display-4 pb-3 text-light text-center">¡Reserva confirmada!</h1>
			{JSON.parse(store.reservaConfirmada).map((reserva, index) => {
				return (
					<div className="container col-md-4 text-light tabla reservas p-3 text-start mt-4" key={index}>
						{store.lineas.map(linea => {
							return (
								<>
									{store.empresas.map(empresa => {
										return (
											<>
												{store.horarios.map(horario => {
													return (
														<>
															{reserva.id_linea == linea.id ? (
																<>
																	{empresa.id == linea.id_empresa ? (
																		<>
																			{reserva.id_horario == horario.id ? (
																				<>
																					<div className="infoReserva my-2 ps-2">
																						<h3 className="datosReserva">
																							Codigo de reserva:{" "}
																							{reserva.codigo}
																						</h3>
																					</div>
																					<div className="infoReserva my-2 ps-2">
																						<h3 className="datosReserva">
																							Linea: {linea.nombre_linea}
																						</h3>
																					</div>
																					<div className="infoReserva my-2 ps-2">
																						<h3 className="datosReserva">
																							Empresa: {empresa.nombre}
																						</h3>
																					</div>
																					<div className="infoReserva my-2 ps-2">
																						<h3 className="datosReserva">
																							Horario de salida:{" "}
																							{horario.hora}
																						</h3>
																					</div>
																					<div className="infoReserva my-2 ps-2">
																						<h3 className="datosReserva">
																							Fecha: {reserva.fecha}
																						</h3>
																					</div>
																					<div className="infoReserva my-2 ps-2">
																						<h3 className="datosReserva">
																							Asientos: {reserva.asiento}
																						</h3>
																					</div>
																				</>
																			) : null}
																		</>
																	) : null}
																</>
															) : null}
														</>
													);
												})}
											</>
										);
									})}
								</>
							);
						})}
					</div>
				);
			})}
			<div className="container mt-4 text-center">
				<button onClick={() => window.print()} className="btn btn-lg btn-dark">
					Imprimir
				</button>
			</div>
		</div>
	);
};

export default Confirmacion;
