import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const AddHorario = props => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ tipo_dia: "", hora: "" });

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		actions.addHorario(props.id_linea, props.id_parada, form.tipo_dia, form.hora);
	};

	return (
		<>
			<div className="container">
				<div>
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type="text"
								className="form-control my-2 text-center"
								name="tipo_dia"
								value={form.tipo_dia}
								onChange={handleChange}
								placeholder="Tipo de día"
							/>
							<input
								type="text"
								className="form-control my-2 text-center"
								name="hora"
								value={form.hora}
								onChange={handleChange}
								placeholder="Hora"
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
