import React from "react";
import LoginForm from "../component/loginForm";
import { Link } from "react-router-dom";
const Login = () => {
	return (
		<>
			<div className="container text-dark bg-light m-start p-3 mt-4 w-50">
				<h2 className="text-dark text-center display-4">Ingresá</h2>
				<LoginForm />
			</div>
			<div className="text-center">
				<Link to="/recuperacion">
					<h4>¿Olvidaste tu contraseña?</h4>
				</Link>
			</div>
		</>
	);
};

export default Login;
