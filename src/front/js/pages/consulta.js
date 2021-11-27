import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { useHistory } from "react-router";
import Mapa from "../component/mapa";
export const Consulta = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	const [linea, setLinea] = useState();
	const [parada, setParada] = useState();

	return (
		<div className="text-center body">
			<h1 className="display-2 text-white p-5">Consulta de horarios</h1>
			<div className="pb-5">
				<div className="row w-75 mx-auto">
					<select
						id="mySelect"
						className="form-select col mx-5 bg-dark text-light  border border-secondary rounded "
						onChange={e => setLinea(e.target.value)}>
						<option defaultValue>Linea</option>
						{store.lineas.map((item, index) => {
							return (
								<option key={item.nombre_linea} value={item.id}>
									{item.nombre_linea}
								</option>
							);
						})}
					</select>
					<select
						className="form-select col mx-5 bg-dark text-light  border border-secondary rounded "
						aria-label="Default select example">
						<option defaultValue>Tipo de Día</option>
						{store.horarios.map((item, index) => {
							return (
								<option key={index} value={item.tipo_dia}>
									{item.tipo_dia}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className="row container m-auto w-50">
				{store.paradas.map(parada => {
					return (
						<>
							{linea == parada.id_linea ? (
								<>
									<div
										key={parada.ubicacion}
										className="col border border-secondary rounded tabla container bg-dark text-light ">
										<ul className="parada list-group  my-2 list-group-flush">
											<span className="form-inline m-auto">
												{parada.ubicacion}{" "}
												<i
													className="fas fa-map-marker-alt fa-sm ms-2"
													data-toggle="modal"
													data-target={"#" + parada.id}
												/>
												<div
													className="modal fade"
													id={parada.id}
													tabIndex="-1"
													role="dialog"
													aria-hidden="true">
													<div className="modal-dialog" role="document">
														<div className="modal-content">
															<Mapa
																latitud={parada.latitud}
																longitud={parada.longitud}
																ubicacion={parada.ubicacion}
															/>
														</div>
													</div>
												</div>
											</span>
											{store.horarios.map(horario => {
												return (
													<>
														{parada.id == horario.id_parada ? (
															<>
																<li
																	key={horario.hora}
																	className="hora border border-secondary rounded list-group-item text-light bg-dark my-2">
																	{horario.hora}
																</li>
															</>
														) : null}
													</>
												);
											})}
										</ul>
									</div>
								</>
							) : null}
						</>
					);
				})}
			</div>
			{!store.login && (
				<div className="text-center">
					<button
						type="submit"
						className="btn btn-light mt-3 btn-lg boton"
						onClick={() => history.push("/login")}>
						Reservar
					</button>
				</div>
			)}
			{store.login && (
				<div className="text-center">
					<button
						type="submit"
						className="btn btn-light mt-3 btn-lg boton"
						onClick={() => history.push("/reserva")}>
						Reservar
					</button>
				</div>
			)}
		</div>
	);
};
