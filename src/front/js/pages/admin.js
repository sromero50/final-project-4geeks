import React from "react";
import ListaEmpresas from "../component/listaEmpresas";
const Admin = () => {
	return (
		<div className="text-center body">
			<h1 className="display-2 text-white pb-3">Administración</h1>
			<ListaEmpresas />
		</div>
	);
};

export default Admin;
