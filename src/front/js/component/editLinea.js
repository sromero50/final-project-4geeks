import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router";
const EditLinea = props => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ nombre_linea: props.nombre_linea, destino: props.destino });

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		actions.editLinea(props.id_empresa, props.id, form.nombre_linea, form.destino);
		console.log(form.nombre_linea, props.id);
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
								name="nombre_linea"
								value={form.nombre_linea}
								onChange={handleChange}
							/>
							<input
								type="text"
								className="form-control my-2 text-center"
								name="destino"
								value={form.destino}
								onChange={handleChange}
								placeholder="Destino de la linea"
							/>
						</div>
						<div className="text-center">
							<button type="submit" className="btn btn-dark">
								Modificar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditLinea;
