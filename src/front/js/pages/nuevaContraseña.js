import React, { useState, useContext } from "react";
import NotFound from "../component/notFound";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Redirect } from "react-router";
const NuevaContraseña = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [hide, setHide] = useState(false);

	const [form, setForm] = useState({ nueva_contraseña: "" });

	const handleSubmit = event => {
		event.preventDefault();
		actions.resetPassword(params.token, form.nueva_contraseña);
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
				<div className="body text-center p-3">
					<div className="login container p-3 mt-4 border rounded border-secondary text-light">
						<h2 className="olvidaste">Ingrese su nueva contraseña</h2>
						<div className="mt-3">
							<form onSubmit={handleSubmit}>
								<div className="input-group my-2">
									<span className="input-group-addon">
										<i className="fas fa-lock iconoInput" />
									</span>
									<input
										value={form.nueva_contraseña}
										onChange={handleChange}
										className="form-control"
										type={hide == false ? "password" : "text"}
										name="nueva_contraseña"
										placeholder="Contraseña"
										required
									/>
									<span className="input-group-addon" onClick={() => setHide(!hide)}>
										<i className="far fa-eye iconoInput" />
									</span>
								</div>
								<button type="submit" className="btn btn-block btn-light">
									Cambiar contraseña
								</button>
							</form>
						</div>
					</div>
				</div>
			)}
			{store.reload && <Redirect to="/login" />}
		</>
	);
};

export default NuevaContraseña;
