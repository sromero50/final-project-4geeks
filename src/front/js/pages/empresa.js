import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AddLinea from "../component/addLinea";
import AddHorario from "../component/addHorario";
import EditLinea from "../component/editLinea";
import "../../styles/home.scss";

export const Empresa = () => {
	const { store, actions } = useContext(Context);

	const [linea, setLinea] = useState();
	const [add, setAdd] = useState(false);
	const [addHorario, setAddHorario] = useState(false);
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
						<select
							id="mySelect"
							className="form-select col-7 mx-5 bg-dark text-light"
							onChange={e => setLinea(e.target.value)}>
							<option defaultValue>Linea</option>
							{store.lineas.map((item, index) => {
								return (
									<>
										{item.id == empresa ? (
											<option key={index} value={item.id}>
												{item.nombre_linea}
											</option>
										) : null}
									</>
								);
							})}
						</select>
						<span className="col-1" onClick={() => setAdd(!add)}>
							<i className="fas fa-plus" />
						</span>
						<span className="col-1" onClick={() => setEdit(!edit)}>
							<i className="fas fa-pen-square" />
						</span>
						<span className="col-1">
							<i className="fas fa-times" />
						</span>
						<div className="w-75">{add && <AddLinea />}</div>
						<div className="w-75">
							{edit && (
								<>
									{store.lineas.map((item, index) => {
										return (
											<>
												{linea == item.id ? (
													<EditLinea nombre_linea={item.nombre_linea} />
												) : null}
											</>
										);
									})}
								</>
							)}
						</div>
					</div>
					<div className="col">
						<select className="form-select mx-5 bg-dark text-light" aria-label="Default select example">
							<option selected>Tipo de Día</option>
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
			<div className="row container">
				{store.paradas.map(parada => {
					return (
						<>
							{linea == parada.id_linea ? (
								<>
									<div className="col container bg-dark text-light border">
										<div className="border my-2">{parada.ubicacion}</div>
										{store.horarios.map(horario => {
											return (
												<>
													{parada.id == horario.id_parada ? (
														<>
															<input
																type="text"
																value={horario.hora}
																className="form-control text-center"
																readOnly
															/>
															<span className="col-1" onClick={() => setEdit(!edit)}>
																<i className="fas fa-pen-square" />
															</span>
															<span className="col-1">
																<i className="fas fa-times" />
															</span>
														</>
													) : null}
												</>
											);
										})}
									</div>
								</>
							) : null}
						</>
					);
				})}
			</div>
			{/* <table className="table table-dark w-75 mx-auto">
				<thead>
					<tr>
						{store.paradas.map((item, index) => {
							return (
								<>
									{linea == item.id_linea ? (
										<>
											<td scope="col" key={index}>
												{item.ubicacion}
											</td>
										</>
									) : null}
								</>
							);
						})}
					</tr>
				</thead>
				<tbody>
					<tr>
						{store.horarios.map((item, index) => {
							return (
								<>
									{linea == item.id_linea ? (
										<>
											<td scope="col" key={index}>
												<input
													type="text"
													value={item.hora}
													className="form-control text-center"
													readOnly
												/>
												<span className="col-1" onClick={() => setEdit(!edit)}>
													<i className="fas fa-pen-square" />
												</span>
												<span className="col-1">
													<i className="fas fa-times" />
												</span>
											</td>
										</>
									) : null}
								</>
							);
						})}
					</tr>
				</tbody>
			</table> */}
			<span className="col-1" onClick={() => setAddHorario(!addHorario)}>
				<i className="fas fa-plus" />
			</span>
			{addHorario && <AddHorario />}
		</div>
	);
};
