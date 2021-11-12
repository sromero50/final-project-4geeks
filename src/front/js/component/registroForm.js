import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
const RegistroForm = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ email: "", password: "", nombre: "" });
	const [checkbox, setCheckbox] = useState(false);
	const handleSubmit = event => {
		event.preventDefault();
		if (checkbox === true) {
			actions.registroEmpresa(form.nombre, form.email, form.password);
		} else {
			actions.registroUsuario(form.nombre, form.email, form.password);
		}
	};

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	const handleCheck = () => {
		setCheckbox(!checkbox);
		console.log(checkbox);
	};

	return (
		<>
			<form action="" id="login" name="registroForm" onSubmit={handleSubmit}>
				<div className="row">
					<div className="form-group my-3 col">
						<label className="h5">Email</label>
						<input
							className="form-control"
							type="email"
							value={form.email}
							name="email"
							placeholder="Ingrese su email"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group my-3 col">
						<label className="h5">Nombre</label>
						<input
							className="form-control"
							type="text"
							value={form.nombre}
							name="nombre"
							placeholder="Ingrese su nombre"
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className="row">
					<div className="form-group my-3 col-6 mx-auto">
						<label className="h5">Contraseña</label>
						<input
							className="form-control"
							type="password"
							value={form.password}
							name="password"
							placeholder="Ingrese su contraseña"
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-warning">
						Registrarse
					</button>
				</div>

				<div className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="empresa"
						value={checkbox}
						onClick={handleCheck}
					/>
					<label className="form-check-label" htmlFor="empresa">
						Soy una empresa
					</label>
				</div>
			</form>
		</>
	);
};

export default RegistroForm;
