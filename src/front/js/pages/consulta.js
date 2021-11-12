import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Consulta = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center body">
			<h1 className="display-2 text-white p-5">Consulta de horarios</h1>
			<div className="pb-5">
				<div className="dropdown d-inline p-5 m-5">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Línea
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							214
						</a>
						<a className="dropdown-item" href="#">
							221
						</a>
						<a className="dropdown-item" href="#">
							222
						</a>
					</div>
				</div>
				<div className="dropdown d-inline p-5 m-5">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Destino
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Pinar
						</a>
						<a className="dropdown-item" href="#">
							Montevideo
						</a>
					</div>
				</div>
				<div className="dropdown d-inline p-5 m-5">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Tipo de día
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Habil
						</a>
						<a className="dropdown-item" href="#">
							Sabado
						</a>
						<a className="dropdown-item" href="#">
							Domingo o feriado
						</a>
					</div>
				</div>
			</div>
			<table className="table table-dark">
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
