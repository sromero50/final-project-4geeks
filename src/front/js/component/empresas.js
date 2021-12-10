import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
const Empresas = props => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ nombre: props.nombre, email: props.email });
	const [edit, setEdit] = useState(true);

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	return (
		<>
			<div className="container tabla card p-4">
				<form>
					<div className="row">
						<input
							type="text"
							className="form-control my-2 col-md bg-dark text-light"
							name="nombre"
							defaultValue={props.nombre}
							onChange={handleChange}
						/>
						<span className="col-md-1 my-3" onClick={() => actions.deleteEmpresa(props.id)}>
							<i className="far fa-trash-alt text-light " />
						</span>
						<span
							className="my-3 col-md-1"
							onClick={() => {
								actions.editEmpresa(props.id, form.nombre, form.email);
							}}>
							<i className="far fa-edit text-light" />
						</span>
					</div>

					<input
						type="text"
						className="form-control row my-2 bg-dark text-light"
						name="email"
						defaultValue={props.email}
						onChange={handleChange}
					/>
				</form>
			</div>
		</>
	);
};

export default Empresas;
