import React from "react";
import LoginForm from "../component/loginForm";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

const Login = () => {
	return (
		<div className="body p-5">
			<div className="container border-secondary text-light p-3 mt-4 login border rounded">
				<h2 className="text-light text-center display-4">Ingresa</h2>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
