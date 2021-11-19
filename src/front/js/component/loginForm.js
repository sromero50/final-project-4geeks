import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import AuthContext from "../Auth/authContext";
const LoginForm = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ email: "", password: "" });
	const [admin, setAdmin] = useState(false);
	const [checkbox, setCheckbox] = useState(false);
	const [checkboxAdmin, setCheckboxAdmin] = useState(false);
	const auth = useContext(AuthContext);

	// useEffect(() => {
	// 	if (localStorage.getItem("admin")) {
	// 		setAdmin(!admin);
	// 		if (admin == true) {
	// 			history.push("/admin");
	// 		}
	// 	}
	// }, []);
	console.log(useContext(AuthContext));

	const handleSubmit = event => {
		event.preventDefault();
		if (checkbox === true) {
			actions.loginEmpresa(form.email, form.password);
			auth.loginEmpresa();
		} else if (checkboxAdmin === true) {
			actions.loginAdmin(form.email, form.password);
			auth.loginAdministrador();
			history.push("/admin");
		} else {
			actions.loginUser(form.email, form.password);
			auth.loginUsuario();
		}
	};

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	const handleCheck = () => {
		setCheckbox(!checkbox);
	};

	const handleCheckAdmin = () => {
		setCheckboxAdmin(!checkboxAdmin);
	};

	return (
		<>
			<form action="" id="login" name="loginForm" onSubmit={handleSubmit}>
				<div className="form-group my-3">
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
				<div className="form-group mt-1">
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
				<div className="form-check text-center my-3 mr-4|">
					<input
						type="checkbox"
						className="form-check-input"
						id="empresa"
						value={checkbox}
						onClick={handleCheck}
					/>
					<label className="form-check-label" htmlFor="empresa">
						Empresa
					</label>
				</div>
				<div className="form-check text-center my-3 ml-3">
					<input
						type="checkbox"
						className="form-check-input"
						id="admin"
						value={checkboxAdmin}
						onClick={handleCheckAdmin}
					/>
					<label className="form-check-label" htmlFor="admin">
						Administrador
					</label>
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-dark">
						Ingresar
					</button>
				</div>
			</form>
		</>
	);
};

export default LoginForm;
