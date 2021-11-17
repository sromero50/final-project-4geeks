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
						{store.lineas.map((item, index) => {
							return (
								<option key={index} value={item.numero_linea}>
									{item.numero_linea}
								</option>
							);
						})}
					</select>
					<select className="form-select col mx-5 bg-dark text-light" aria-label="Default select example">
						<option selected>Destino</option>
						{store.lineas.map((item, index) => {
							return (
								<option key={index} value={item.destino}>
									{item.destino}
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
			<table className="table table-dark w-75 mx-auto">
				<thead>
					<tr>
						{store.paradas.map((item, index) => {
							return (
								<th scope="col" key={index}>
									{item.ubicacion}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					<tr>
						{store.horarios.map((item, index) => {
							return (
								<td scope="col" key={index}>
									{item.hora}
								</td>
							);
						})}
					</tr>
					<tr>
						{store.horarios.map((item, index) => {
							return (
								<td scope="col" key={index}>
									{item.hora}
								</td>
							);
						})}
					</tr>
					<tr>
						{store.horarios.map((item, index) => {
							return (
								<td scope="col" key={index}>
									{item.hora}
								</td>
							);
						})}
					</tr>
				</tbody>
			</table>
			{localStorage.getItem("usuario") ? (
				<div className="text-center">
					<button type="submit" className="btn btn-dark mt-3">
						Ingresar
					</button>
				</div>
			) : null}
		</div>
	);
};
