import React from "react";
import RegistroForm from "../component/registroForm";

const Registro = () => {
	return (
		<>
			<div className="container text-dark bg-light m-start p-3 mt-4 w-50">
				<h2 className="text-dark text-center display-4">Regístrate</h2>
				<RegistroForm />
			</div>
		</>
	);
};

export default Registro;
