import React from "react";
import RegistroForm from "../component/registroForm";
import "../../styles/home.scss";

const Registro = () => {
	return (
		<div className="body p-5">
			<div className="container text-light m-start p-3 w-50">
				<h2 className="text-light text-center display-4">Regístrate</h2>
				<RegistroForm />
			</div>
		</div>
	);
};

export default Registro;
