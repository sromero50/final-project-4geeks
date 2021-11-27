import React from "react";
import RegistroForm from "../component/registroForm";
import "../../styles/home.scss";

const Registro = () => {
	return (
		<div className="body p-5">
			<div className="container border-secondary text-light p-3 login border rounded">
				<h2 className="text-light text-center display-4">Registrate</h2>
				<RegistroForm />
			</div>
		</div>
	);
};

export default Registro;
