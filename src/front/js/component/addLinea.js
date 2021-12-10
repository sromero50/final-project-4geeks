import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router";
const AddLinea = props => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ nombre_linea: "" });

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		actions.addLinea(props.id_empresa, form.nombre_linea);
	};

	return (
		<>
			<div className="container">
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type="text"
							className="form-control my-2 text-center"
							name="nombre_linea"
							value={form.nombre_linea}
							onChange={handleChange}
							placeholder="Nombre de la linea"
						/>
					</div>
					<div className="text-center">
						<button type="submit" className="btn btn-dark">
							Registrar
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddLinea;
