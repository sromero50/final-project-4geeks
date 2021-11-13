import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Consulta = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center body">
			<h1 className="display-2 text-white p-5">Consulta de horarios</h1>
			<div className="pb-5">
				<div className="row w-75 mx-auto">
					<select className="form-select col mx-5 bg-dark text-light" aria-label="Default select example">
						<option selected>Linea</option>
						<option value="1">214</option>
						<option value="2">221</option>
						<option value="3">222</option>
					</select>
					<select className="form-select col mx-5 bg-dark text-light" aria-label="Default select example">
						<option selected>Destino</option>
						<option value="1">Montevideo</option>
						<option value="2">Pinar</option>
					</select>
					<select className="form-select col mx-5 bg-dark text-light" aria-label="Default select example">
						<option selected>Tipo de Día</option>
						<option value="1">Habiles</option>
						<option value="2">Sabados</option>
						<option value="3">Domingos o Feriados</option>
					</select>
				</div>
			</div>
			<table className="table table-dark w-75 mx-auto">
				<thead>
					<tr>
						<th scope="col">Parada 1</th>
						<th scope="col">Parada 2</th>
						<th scope="col">Parada 3</th>
						<th scope="col">Parada 4</th>
						<th scope="col">Parada 5</th>
						<th scope="col">Parada 6</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>00:00</td>
						<td>00:15</td>
						<td>00:30</td>
						<td>01:00</td>
						<td>01:15</td>
						<td>01:30</td>
					</tr>
					<tr>
						<td>00:15</td>
						<td>00:30</td>
						<td>01:00</td>
						<td>01:15</td>
						<td>01:30</td>
						<td>01:45</td>
					</tr>
					<tr>
						<td>00:30</td>
						<td>01:00</td>
						<td>01:15</td>
						<td>01:30</td>
						<td>01:45</td>
						<td>02:00</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
