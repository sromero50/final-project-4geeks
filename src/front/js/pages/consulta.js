import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { useHistory } from "react-router";
import Mapa from "../component/mapa";
export const Consulta = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	const [linea, setLinea] = useState();
	const [tipoDia, setTipoDia] = useState();

	return (
		<div className="text-center container tabla p-3 mt-5 bg-dark border border-dark rounded user-select-none">
			<h1 className="display-2 text-white p-5">Consulta de horarios</h1>
			<div className="pb-5">
				<div className="row mx-auto p-4">
					<select
						id="mySelect"
						className="form-select my-1 col-md text-light tabla mx-1 border border-dark parada rounded text-center"
						onChange={e => setLinea(e.target.value)}>
						<option className="bg-select" defaultValue>
							Linea
						</option>
						{store.lineas.map((item, index) => {
							return (
								<option className="bg-select" key={item.id} value={item.id}>
									{item.nombre_linea}
								</option>
							);
						})}
					</select>
					<select
						className="form-select my-1 col-md tabla text-light mx-1 parada border border-dark rounded text-center"
						aria-label="Default select example"
						onChange={e => setTipoDia(e.target.value)}>
						<option className="bg-select parada" defaultValue>
							Tipo de Día
						</option>

						<option className="bg-select parada" value="Habil">
							Habil
						</option>
						<option className="bg-select parada" value="Sabado">
							Sabado
						</option>
						<option className="bg-select parada" value="Domingo">
							Domingo
						</option>
						<option className="bg-select parada" value="Feriado">
							Feriado
						</option>
					</select>
					{store.lineas.map(item => {
						return (
							<>
								{linea == item.id ? (
									<div className="col-md my-1 tabla text-light mx-1 border border-dark rounded text-center parada">
										<p className="mt-3">{item.destino}</p>
									</div>
								) : null}
							</>
						);
					})}
				</div>
			</div>
			<div className="row container m-auto">
				{store.paradas.map(parada => {
					return (
						<React.Fragment key={parada.ubicacion}>
							{linea == parada.id_linea ? (
								<div className="col-md border my-1 border-dark rounded container tabla text-light ">
									<ul className="parada list-group my-2 list-group-flush">
										<span className="form-inline m-auto">
											{parada.ubicacion}{" "}
											<i
												className="fas fa-map-marker-alt fa-sm ms-2 iconoMap "
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
												<React.Fragment key={horario.hora}>
													{horario.tipo_dia == tipoDia ? (
														<>
															{parada.id == horario.id_parada ? (
																<li className="hora border border-dark rounded list-group-item bg-dark text-light my-2">
																	{horario.hora}
																</li>
															) : null}
														</>
													) : null}
												</React.Fragment>
											);
										})}
									</ul>
								</div>
							) : null}
						</React.Fragment>
					);
				})}
			</div>
			{!store.login && (
				<div className="text-center">
					<button
						type="submit"
						className="btn btn-dark my-5 btn-lg boton"
						onClick={() => history.push("/login")}>
						Reservar
					</button>
				</div>
			)}
			{store.login && (
				<div className="text-center">
					<button
						type="submit"
						className="btn btn-dark my-5 btn-lg boton"
						onClick={() => history.push("/reserva")}>
						Reservar
					</button>
				</div>
			)}
		</div>
	);
};
