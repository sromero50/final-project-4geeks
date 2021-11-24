import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AddLinea from "../component/addLinea";
import AddHorario from "../component/addHorario";
import EditLinea from "../component/editLinea";
import EditHora from "../component/editHora";
import "../../styles/home.scss";

export const Empresa = () => {
	const { store, actions } = useContext(Context);

	const [linea, setLinea] = useState();
	const [add, setAdd] = useState(false);
	const [edit, setEdit] = useState(false);
	const [empresa, setEmpresa] = useState(false);

	useEffect(() => {
		setEmpresa(JSON.parse(localStorage.getItem("info")).empresa_id);
	}, []);

	return (
		<div className="text-center body">
			<h1 className="display-2 text-white p-5">Empresas</h1>
			<div className="pb-5">
				<div className="row w-75 mx-auto">
					<div className="col">
						<div className="editLinea">
							<select
								id="mySelect"
								className="form-select mx-2 bg-dark text-light border border-secondary rounded text-center"
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

							<span className="mt-2" onClick={() => setAdd(!add)}>
								<i className="fas fa-plus" />
							</span>
							<span className="mx-2 mt-2" onClick={() => actions.deleteLinea(linea)}>
								<i className="far fa-trash-alt" />
							</span>
							<span className="mt-2" onClick={() => setEdit(!edit)}>
								<i className="far fa-edit" />
							</span>
						</div>
						<div className="w-75 ms-3">{add && <AddLinea id_empresa={empresa} />}</div>
						<div className="w-75">
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
					<div className="col">
						<select
							className="form-select mx-5 bg-dark text-light border border-secondary rounded text-center"
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
											{parada.ubicacion}
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
	);
};
