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

	const handleSubmit = event => {
		event.preventDefault();
		setEdit(!edit);
	};

	return (
		<>
			<div className="empresaInput container">
				<div>
					<form
						onSubmit={() => {
							actions.editEmpresa(props.id, form.nombre, form.email);
							handleSubmit(event);
						}}>
						<div className="inputEmpresa row">
							<input
								type="text"
								className="form-control my-2 col"
								name="nombre"
								defaultValue={props.nombre}
								readOnly={edit}
								onChange={handleChange}
							/>
							<span className="col" onClick={() => actions.deleteEmpresa(props.id)}>
								<i className="fas fa-times" />
							</span>
							<span
								className="ml-3 col"
								onClick={() => {
									setEdit(!edit);
									actions.editEmpresa(props.id, form.nombre, form.email);
								}}>
								<i className="fas fa-pen-square" />
							</span>
						</div>
						{edit == false ? (
							<input
								type="text"
								className="form-control my-2"
								name="email"
								defaultValue={props.email}
								readOnly={edit}
								onChange={handleChange}
							/>
						) : (
							false
						)}
					</form>
				</div>
			</div>
		</>
	);
};

export default Empresas;
