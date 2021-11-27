import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AddLinea from "../component/addLinea";
import AddHorario from "../component/addHorario";
import EditLinea from "../component/editLinea";
import EditHora from "../component/editHora";
import Loading from "../component/loading";
import NotFound from "../component/notFound";
import Mapa from "../component/mapa";
import "../../styles/home.scss";

export const Empresa = () => {
	const { store, actions } = useContext(Context);

	const [linea, setLinea] = useState();
	const [add, setAdd] = useState(false);
	const [edit, setEdit] = useState(false);
	const [empresa, setEmpresa] = useState(false);
	const [addHorario, setAddHorario] = useState(false);

	useEffect(() => {
		setEmpresa(JSON.parse(localStorage.getItem("info")).empresa_id);
	}, []);

	return (
		<>
			<Loading active={store.empresa}>
				<div className="text-center body">
					<h1 className="display-2 text-white p-5">Empresas</h1>
					<div className="pb-5">
						<div className="row w-75 mx-auto">
							<div className="col-7">
								<div className="editLinea">
									<select
										id="mySelect"
										className="form-select ms-5 bg-dark text-light border border-secondary rounded text-center w-50"
										onChange={e => setLinea(e.target.value)}>
										<option defaultValue>Linea</option>
										{store.lineas.map((item, index) => {
											return (
												<>
													{item.id_empresa == empresa ? (
														<option key={index} value={item.id}>
															{item.nombre_linea}
														</option>
													) : null}
												</>
											);
										})}
									</select>

									<span className="mt-2 ms-1" onClick={() => setAdd(!add)}>
										<i className="fas fa-plus" />
									</span>
									<span className="mx-2 mt-2" onClick={() => actions.deleteLinea(linea)}>
										<i className="far fa-trash-alt" />
									</span>
									<span className="mt-2" onClick={() => setEdit(!edit)}>
										<i className="far fa-edit" />
									</span>
								</div>
								<div className="w-75 ms-4">{add && <AddLinea id_empresa={empresa} />}</div>
								<div className="w-75 ms-4">
									{edit && (
										<>
											{store.lineas.map((item, index) => {
												return (
													<>
														{linea == item.id ? (
															<EditLinea
																id_empresa={item.id_empresa}
																id={item.id}
																nombre_linea={item.nombre_linea}
															/>
														) : null}
													</>
												);
											})}
										</>
									)}
								</div>
							</div>
							<div className="col-5">
								<select
									className="w-50 form-select bg-dark text-light border border-secondary rounded text-center"
									aria-label="Default select example ">
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
					</div>
					<div className="row container m-auto w-50">
						{store.paradas.map(parada => {
							return (
								<>
									{linea == parada.id_linea ? (
										<>
											<div className="col border border-secondary rounded tabla container bg-dark text-light">
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
													<span onClick={() => setAddHorario(!addHorario)}>
														<i className="fas fa-plus iconoParada" />
													</span>
													{addHorario && (
														<AddHorario id_linea={linea} id_parada={parada.id} />
													)}
													{store.horarios.map(horario => {
														return (
															<>
																{parada.id == horario.id_parada ? (
																	<li
																		key={horario.hora}
																		className="list-group-item text-light bg-dark my-2">
																		<EditHora
																			id={horario.id}
																			id_linea={linea}
																			id_parada={parada.id}
																			tipo_dia={horario.tipo_dia}
																			hora={horario.hora}
																		/>
																	</li>
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
				</div>
			</Loading>
			{!store.empresa && <NotFound />}
			{store.reload && <>{window.location.reload()}</>}
		</>
	);
};
