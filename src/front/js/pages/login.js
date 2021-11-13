import React from "react";
import LoginForm from "../component/loginForm";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

const Login = () => {
	return (
		<div className="body p-5">
			<div className="container text-light p-3 mt-4 w-50">
				<h2 className="text-light text-center display-4">Ingresá</h2>
				<LoginForm />
			</div>
			<div className="text-center m-2">
				<Link to="/recuperacion">
					<h4>¿Olvidaste tu contraseña?</h4>
				</Link>
			</div>
		</div>
	);
};

export default Login;
