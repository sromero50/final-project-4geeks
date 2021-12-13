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
	const [tipoDia, setTipoDia] = useState();

	useEffect(() => {
		setEmpresa(JSON.parse(localStorage.getItem("info")).empresa_id);
	}, []);

	return (
		<>
			<Loading active={store.empresa}>
				<div className="text-center container">
					<h1 className="display-2 text-white p-5">Empresas</h1>
					<div className="pb-5 d-flex justify-content-center container ">
						<div className="row container">
							<div className="col-md-6 container">
								<div className="container row">
									<select
										id="mySelect"
										className="form-select mx-4 parada col-sm tabla text-light border border-secondary rounded text-center"
										onChange={e => setLinea(e.target.value)}>
										<option className="bg-select parada" defaultValue>
											Linea
										</option>
										{store.lineas.map((item, index) => {
											return (
												<>
													{item.id_empresa == empresa ? (
														<option
															className="bg-select parada"
															key={index}
															value={item.id}>
															{item.nombre_linea}
														</option>
													) : null}
												</>
											);
										})}
									</select>

									<span className="mt-2 col-sm-1" onClick={() => setAdd(!add)}>
										<i className="fas fa-plus iconosEmpresa " />
									</span>
									<span className="mt-2 col-sm-1" onClick={() => actions.deleteLinea(linea)}>
										<i className="far fa-trash-alt iconosEmpresa" />
									</span>
									<span className="mt-2  col-sm-1" onClick={() => setEdit(!edit)}>
										<i className="far fa-edit iconosEmpresa" />
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
																destino={item.destino}
															/>
														) : null}
													</>
												);
											})}
										</>
									)}
								</div>
							</div>
							<div className="col-md-6">
								<select
									className="form-select mx-4 tabla parada text-light border border-secondary rounded text-center "
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
							</div>
						</div>
					</div>
					<div className="row container m-auto">
						{store.paradas.map(parada => {
							return (
								<>
									{linea == parada.id_linea ? (
										<>
											<div className="col-md rounded tabla container text-light">
												<ul className="parada list-group  my-2 list-group-flush">
													<span className="form-inline m-auto">
														{parada.ubicacion}{" "}
														<i
															className="fas fa-map-marker-alt fa-sm ms-2 iconoMap"
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
													<span
														className="text-light"
														onClick={() => setAddHorario(!addHorario)}>
														<i className="fas fa-plus text-light" />
													</span>
													{addHorario && (
														<AddHorario id_linea={linea} id_parada={parada.id} />
													)}
													{store.horarios.map(horario => {
														return (
															<>
																{horario.tipo_dia == tipoDia ? (
																	<>
																		{parada.id == horario.id_parada ? (
																			<li
																				key={horario.hora}
																				className="list-group-item text-light tabla my-2">
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
