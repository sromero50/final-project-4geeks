import React, { useState, useEffect } from "react";
import ListaEmpresas from "../component/listaEmpresas";
import AddEmpresa from "../component/addEmpresa";
const Admin = () => {
	const [add, setAdd] = useState(false);
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("admin")) {
			setAuth(!auth);
		}
	}, []);

	if (auth == true) {
		return (
			<div className="text-center body">
				<h1 className="display-2 text-white pb-3">Administración</h1>
				<ListaEmpresas />
				<span onClick={() => setAdd(!add)}>
					<i className="fas fa-plus" />
				</span>
				{add == true ? <AddEmpresa /> : null}
			</div>
		);
	} else {
		return (
			<div className="body text-center">
				<h1 className="display-2 text-white pb-3">Vista solo para administradores</h1>
			</div>
		);
	}
};

export default Admin;
