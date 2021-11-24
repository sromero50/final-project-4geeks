import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const AddHorario = props => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ id_linea: "", id_parada: "", tipo_dia: "", hora: "" });

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	// const handleClick = () => {
	// 	for (let i = 0; i < store.lineas.length; i++) {
	// 		const datos = store.lineas[i];
	// 		if (datos) {
	// 			for (const id in datos) {
	// 				if (datos.nombre_linea == form.id_linea) {
	// 					console.log("el id de la linea es", datos.id);
	// 					let id = datos.id;
	// 					setForm({ ...form, id_linea: datos.id });
	// 				}
	// 			}
	// 		}
	// 	}

	// 	for (let i = 0; i < store.paradas.length; i++) {
	// 		const datosParada = store.paradas[i];
	// 		if (datosParada) {
	// 			for (const id in datosParada) {
	// 				if (datosParada.ubicacion == form.id_parada) {
	// 					console.log("el id de parada es ", datosParada.id);
	// 					let id = datosParada.id;
	// 					setForm({ ...form, id_parada: id });
	// 				}
	// 			}
	// 		}
	// 	}
	// };

	const handleSubmit = event => {
		event.preventDefault();
		actions.addHorario(form.id_linea, form.id_parada, form.tipo_dia, form.hora);
	};

	return (
		<>
			<div className="container w-25">
				<div>
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type="text"
								className="form-control my-2"
								name="id_linea"
								value={form.id_linea}
								onChange={handleChange}
								placeholder="id de la linea"
							/>
							<input
								type="text"
								className="form-control my-2"
								name="id_parada"
								value={form.id_parada}
								onChange={handleChange}
								placeholder="id de la parada"
							/>
							<input
								type="text"
								className="form-control my-2"
								name="tipo_dia"
								value={form.tipo_dia}
								onChange={handleChange}
								placeholder="tipo de dia"
							/>
							<input
								type="text"
								className="form-control my-2"
								name="hora"
								value={form.hora}
								onChange={handleChange}
								placeholder="hora"
							/>
						</div>
						<div className="text-center">
							<button type="submit" className="btn btn-dark">
								Registrar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddHorario;
