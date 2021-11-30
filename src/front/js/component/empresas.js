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
			<div className="empresaInput">
				<div>
					<form>
						<div className="inputEmpresa row">
							<input
								type="text"
								className="form-control my-2 col bg-dark text-light"
								name="nombre"
								defaultValue={props.nombre}
								onChange={handleChange}
							/>
							<span className="col-1 my-3" onClick={() => actions.deleteEmpresa(props.id)}>
								<i className="far fa-trash-alt" />
							</span>
							<span
								className="my-3 col-1"
								onClick={() => {
									actions.editEmpresa(props.id, form.nombre, form.email);
								}}>
								<i className="far fa-edit" />
							</span>

							<input
								type="text"
								className="form-control my-2 bg-dark text-light"
								name="email"
								defaultValue={props.email}
								onChange={handleChange}
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Empresas;
