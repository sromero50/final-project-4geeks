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
					<div className="row">
						<div className="form-group my-3">
							<label className="labelRegistros">Nombre</label>
							<div className="input-group">
								<span className="input-group-addon ">
									<i className="fas fa-user-circle iconoInput" />
								</span>
								<input
									className="form-control input-group"
									type="text"
									value={form.nombre}
									name="nombre"
									placeholder="Ingrese su nombre"
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="form-group my-3">
							<label className="labelRegistros">Email</label>
							<div className="input-group">
								<span className="input-group-addon ">
									<i className="fas fa-envelope iconoInput" />
								</span>
								<input
									className="form-control input-group "
									type="email"
									value={form.email}
									name="email"
									placeholder="Ingrese su email"
									onChange={handleChange}
									required
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="form-group my-3 mx-auto">
							<label className="labelRegistros">Contraseña</label>
							<div className="input-group ">
								<span className="input-group-addon">
									<i className="fas fa-lock iconoInput" />
								</span>
								<input
									className="form-control input-group "
									type={hide == false ? "password" : "text"}
									value={form.password}
									name="password"
									placeholder="Ingrese su contraseña"
									onChange={handleChange}
									required
								/>{" "}
								<span className="input-group-addon" onClick={() => setHide(!hide)}>
									<i className="far fa-eye iconoInput" />
								</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="form-group my-3 mx-auto">
							<label className="labelRegistros">Confirmar contraseña</label>
							<div className="input-group ">
								<span className="input-group-addon">
									<i className="fas fa-lock iconoInput" />
								</span>
								<input
									className="form-control input-group "
									type={hide == false ? "password" : "text"}
									value={form.password_confirm}
									name="password_confirm"
									placeholder="Confirme su contraseña"
									onChange={handleChange}
									required
								/>{" "}
								<span className="input-group-addon" onClick={() => setHide(!hide)}>
									<i className="far fa-eye iconoInput" />
								</span>
							</div>
						</div>
					</div>
					<div className="form-check text-center my-3">
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
					<div className="text-center">
						<button type="submit" className="btn btn-light btn-block">
							Registrarse
						</button>
					</div>
				</form>
			)}
			{store.signup && <Redirect to="/login/" />}
		</>
	);
};

export default RegistroForm;
