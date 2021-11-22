import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { useHistory } from "react-router";
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
						className="form-select col mx-5 bg-dark text-light"
						onChange={e => setLinea(e.target.value)}>
						<option selected>Linea</option>
						{store.lineas.map((item, index) => {
							return (
								<option key={index} value={item.id}>
									{item.nombre_linea}
								</option>
							);
						})}
					</select>
					<select className="form-select col mx-5 bg-dark text-light" aria-label="Default select example">
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
																className="inputReserva"
																id={horario.hora}
																type="checkbox"
																name={horario.hora}
																value={horario.hora}
																onClick={e =>
																	console.log(e.target.value, parada.ubicacion, linea)
																}
															/>
															<label className="labelReserva" htmlFor={horario.hora}>
																{horario.hora}
															</label>
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
										<td scope="col" key={index}>
											{item.ubicacion}
										</td>
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
										<td scope="col" key={index}>
											{item.hora}
										</td>
									) : null}
								</>
							);
						})}
					</tr>
				</tbody>
			</table> */}
			{!store.login && (
				<div className="text-center">
					<button type="submit" className="btn btn-dark mt-3" onClick={() => history.push("/login")}>
						Ingresar
					</button>
				</div>
			)}
		</div>
	);
};
