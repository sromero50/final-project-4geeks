import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
const RegistroForm = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ email: "", password: "", nombre: "", password_confirm: "" });
	const [checkbox, setCheckbox] = useState(false);

	const [hide, setHide] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		if (form.password == form.password_confirm) {
			if (checkbox === true) {
				actions.registroEmpresa(form.nombre, form.email, form.password);
			} else {
				actions.registroUsuario(form.nombre, form.email, form.password);
			}
		} else {
			Swal.fire({
				icon: "error",
				title: "Las contraseñas no son iguales",
				text: "Intente escribirlas otra vez"
			});
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
			{!store.signup && (
				<form action="" id="login" name="registroForm" onSubmit={handleSubmit}>
					<div className="row d-flex align-items-center justify-content-center">
						<div className="col-md-6">
							<div className="card px-5 py-5 tabla text-light border border-dark rounded">
								<h1 className="text-light text-center display-5 my-3">Registrate</h1>
								<label className="form-label">
									<h4>Nombre</h4>
								</label>
								<div className="form-input input-group mb-3">
									<span className="input-group-text">
										<i className="fa fa-envelope fa-sm" />
									</span>
									<input
										name="nombre"
										required
										onChange={handleChange}
										type="text"
										className="form-control"
										value={form.Nombre}
										placeholder="Ingrese su nombre"
									/>{" "}
								</div>
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
										placeholder="Ingrese su email"
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
										placeholder="Ingrese su contraseña"
										value={form.password}
									/>{" "}
									<span className="input-group-text" onClick={() => setHide(!hide)}>
										<i className="far fa-eye" />
									</span>
								</div>
								<label className="form-label mt-3">
									<h4>Confirmar Password</h4>
								</label>
								<div className="form-input input-group mb-3">
									<span className="input-group-text">
										<i className="fas fa-lock fa-md" />
									</span>
									<input
										name="password_confirm"
										required
										onChange={handleChange}
										type={hide ? "text" : "password"}
										className="form-control"
										placeholder="Confirme su contraseña"
										value={form.password_confirm}
									/>{" "}
									<span className="input-group-text" onClick={() => setHide(!hide)}>
										<i className="far fa-eye" />
									</span>
								</div>
								<button className="btn btn-dark fw-bold mt-4">Registrar</button>
							</div>
						</div>
					</div>
				</form>
			)}
			{store.signup && <Redirect to="/login/" />}
		</>
	);
};

export default RegistroForm;
