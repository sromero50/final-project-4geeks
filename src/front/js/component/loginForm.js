import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const LoginForm = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ email: "", password: "" });
	// const [checkbox, setCheckbox] = useState(false);
	// const [checkboxAdmin, setCheckboxAdmin] = useState(false);

	// const handleSubmit = event => {
	// 	event.preventDefault();
	// 	if (checkbox === true) {
	// 		actions.loginEmpresa(form.email, form.password);
	// 	} else if (checkboxAdmin === true) {
	// 		actions.loginAdmin(form.email, form.password);
	// 		console.log(store.error);
	// 	} else {
	// 		actions.loginUser(form.email, form.password);
	// 	}
	// };

	const handleSubmit = event => {
		event.preventDefault();
		actions.loginUser(form.email, form.password);
	};

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	// const handleCheck = () => {
	// 	setCheckbox(!checkbox);
	// };

	// const handleCheckAdmin = () => {
	// 	setCheckboxAdmin(!checkboxAdmin);
	// };

	useEffect(() => {
		console.log(store.error);
	}, []);

	return (
		<>
			{!store.login && (
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
						<div className="mt-2">
							<Link to="/recuperacion">
								<span className="text-dark recover">¿Olvidaste tu contraseña?</span>
							</Link>
						</div>
					</div>
					{/* <div className="form-check text-center my-3 mr-4|">
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
					</div> */}
					<div className="text-center">
						<button type="submit" className="btn btn-dark btn-block">
							Ingresar
						</button>
					</div>
				</form>
			)}
			{/* {store.error && (
				<>
					{Swal.fire({
						title: "Error!",
						text: "Do you want to continue",
						icon: "error",
						confirmButtonText: "Cool"
					})}{" "}
				</>
			)} */}
			{store.admin && <Redirect to="/admin/" />}
			{store.user && <Redirect to="/usuario/" />}
			{store.empresa && <Redirect to="/empresa/" />}
		</>
	);
};

export default LoginForm;
