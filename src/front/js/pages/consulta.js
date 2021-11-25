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
											{parada.ubicacion}
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
					<button
						type="submit"
						className="btn btn-dark mt-3 btn-lg boton"
						onClick={() => history.push("/login")}>
						Reservar
					</button>
				</div>
			)}
			{store.login && (
				<div className="text-center">
					<button
						type="submit"
						className="btn btn-dark mt-3 btn-lg boton"
						onClick={() => history.push("/reserva")}>
						Reservar
					</button>
				</div>
			)}
		</div>
	);
};
