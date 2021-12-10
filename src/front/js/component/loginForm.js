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
					<div className="row d-flex align-items-center justify-content-center">
						<div className="col-md-6">
							<div className="card px-5 py-5 tabla text-light border border-dark rounded">
								<h1 className="text-light text-center display-5 my-3">Ingresa</h1>
								<label className="form-label">
									<h4>Email</h4>
								</label>
								<div className="form-input input-group mb-3">
									<span className="input-group-text">
										<i className="fa fa-envelope fa-sm" />
									</span>
									<input
										name="email"
										required
										onChange={handleChange}
										type="text"
										className="form-control"
										value={form.email}
										placeholder="Email address"
									/>{" "}
								</div>
								<label className="form-label mt-3">
									<h4>Password</h4>
								</label>
								<div className="form-input input-group mb-3">
									<span className="input-group-text">
										<i className="fas fa-lock fa-md" />
									</span>
									<input
										name="password"
										required
										onChange={handleChange}
										type={hide ? "text" : "password"}
										className="form-control"
										placeholder="Password"
										value={form.password}
									/>{" "}
									<span className="input-group-text" onClick={() => setHide(!hide)}>
										<i className="far fa-eye" />
									</span>
								</div>
								<div className="text-start">
									{" "}
									<a href="/recuperar" className="text-decoration-none text-light">
										Olvidaste la contraseña?
									</a>{" "}
								</div>
								<button className="btn btn-dark mt-4">Ingresar</button>
							</div>
						</div>
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
