import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Loading from "../component/loading";
export const MisReservas = () => {
	const { store, actions } = useContext(Context);
	const [usuario, setUsuario] = useState();
	useEffect(() => {
		setUsuario(JSON.parse(localStorage.getItem("info")).usuario_id);
	}, []);

	return (
		<>
			<Loading active={store.user}>
				{" "}
				{store.user && (
					<div className="text-center body">
						<h1 className="display-4 text-light ">Mis reservas</h1>
						{store.reservas.length == 0 ? (
							<h2 className="display-5 text-light">Usted no ha hecho ninguna reserva</h2>
						) : (
							<>
								{store.reservas.map(reserva => {
									return (
										<>
											{usuario == reserva.id_usuario ? (
												<div
													className="container border-secondary text-light p-3 mt-4 bg-dark border rounded reservas tabla w-25 text-left"
													key={reserva.id}>
													{store.lineas.map(linea => {
														return (
															<>
																{store.empresas.map(empresa => {
																	return (
																		<>
																			{store.horarios.map(horario => {
																				return (
																					<>
																						{reserva.id_linea ==
																						linea.id ? (
																							<>
																								{empresa.id ==
																								linea.id_empresa ? (
																									<>
																										{reserva.id_horario ==
																										horario.id ? (
																											<>
																												<div className="border rounded border-secondary  my-2 ps-2">
																													<h3 className="datosReserva">
																														Codigo
																														de
																														reserva:{" "}
																														{
																															reserva.codigo_reserva
																														}
																													</h3>
																												</div>
																												<div className="border rounded border-secondary infoReserva my-2 ps-2">
																													<h3 className="datosReserva">
																														Linea:{" "}
																														{
																															linea.nombre_linea
																														}
																													</h3>
																												</div>
																												<div className="border rounded border-secondary infoReserva my-2 ps-2">
																													<h3 className="datosReserva">
																														Empresa:{" "}
																														{
																															empresa.nombre
																														}
																													</h3>
																												</div>
																												<div className="border rounded border-secondary infoReserva my-2 ps-2">
																													<h3 className="datosReserva">
																														Horario
																														de
																														salida:{" "}
																														{
																															horario.hora
																														}
																													</h3>
																												</div>
																												<div className="border rounded border-secondary infoReserva my-2 ps-2">
																													<h3 className="datosReserva">
																														Fecha:{" "}
																														{
																															reserva.fecha
																														}
																													</h3>
																												</div>
																												<div className="border rounded border-secondary infoReserva my-2 ps-2">
																													<h3 className="datosReserva">
																														Asientos:{" "}
																														{
																															reserva.asiento
																														}
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
											) : null}
										</>
									);
								})}
							</>
						)}
					</div>
				)}
			</Loading>
		</>
	);
};
