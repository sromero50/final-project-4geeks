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

	const handleSubmit = event => {
		event.preventDefault();
		actions.addLinea(form.nombre_linea);
	};

	return (
		<>
			<div className="container w-50">
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
