import React, { useState, useContext } from "react";
import NotFound from "../component/notFound";
import { Context } from "../store/appContext";
const RecuperarPassword = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ email: "" });

	const handleSubmit = event => {
		event.preventDefault();
		actions.solicitudContraseña(form.email);
	};

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	return (
		<>
			{" "}
			{store.login && <NotFound />}
			{!store.login && (
				<div className="text-center p-5 container">
					<div className="card container recover col-md-6 bg-dark m-auto mt-3 p-3 border border-secondary rounded">
						<div className="card-body">
							<div className="text-center text-light">
								<h3>
									<i className="fa fa-lock text-light fa-4x" />
								</h3>
								<h2 className="text-center olvidaste ">Olvidaste tu contraseña?</h2>
								<h6 className="my-3 restablecer ">Puedes restablecer tu contraseña aquí.</h6>
								<div className="card-body">
									<form id="register-form" className="form" onSubmit={handleSubmit}>
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon">
													<i className="fas fa-envelope iconoInput" />
												</span>
												<input
													onChange={handleChange}
													value={form.email}
													id="email"
													name="email"
													placeholder="Email"
													className="form-control"
													type="email"
												/>
											</div>
										</div>
										<div className="form-group">
											<button type="submit" className="btn btn-block btn-dark">
												Restablecer contraseña
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default RecuperarPassword;
