import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const LoginForm = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ email: "", password: "" });
	const [hide, setHide] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		actions.loginUser(form.email, form.password);
	};

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	return (
		<>
			{!store.login && (
				<form action="" id="login" name="loginForm" onSubmit={handleSubmit}>
					<div className="form-group my-3">
						<label className="labelRegistros">Email</label>
						<div className="input-group">
							<span className="input-group-addon ">
								<i className="fas fa-envelope iconoInput" />
							</span>

							<input
								className="form-control input-group"
								type="email"
								value={form.email}
								name="email"
								placeholder="Ingrese su email"
								onChange={handleChange}
								required
							/>
						</div>
					</div>
					<div className="form-group mt-1">
						<label className="labelRegistros">Contraseña</label>
						<div className="input-group ">
							<span className="input-group-addon">
								<i className="fas fa-lock iconoInput" />
							</span>
							<input
								className="form-control input-group"
								type={hide == false ? "password" : "text"}
								value={form.password}
								name="password"
								placeholder="Ingrese su contraseña"
								onChange={handleChange}
								required
							/>
							<span className="input-group-addon" onClick={() => setHide(!hide)}>
								<i className="far fa-eye iconoInput" />
							</span>
						</div>
						<div className="mt-2">
							<Link className="text-light olvidasteAnchor" to="/recuperar">
								<span>¿Olvidaste tu contraseña?</span>
							</Link>
						</div>
					</div>

					<div className="text-center">
						<button type="submit" className="btn btn-light btn-block">
							Ingresar
						</button>
					</div>
				</form>
			)}
			{store.admin && <Redirect to="/admin/" />}
			{store.user && <Redirect to="/usuario/" />}
			{store.empresa && <Redirect to="/empresa/" />}
		</>
	);
};

export default LoginForm;
