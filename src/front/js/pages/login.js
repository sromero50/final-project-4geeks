import React from "react";
import LoginForm from "../component/loginForm";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

const Login = () => {
	return (
		<div className="container p-5">
			<div>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
