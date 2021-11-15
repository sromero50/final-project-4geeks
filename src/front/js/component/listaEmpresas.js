import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Empresas from "./empresas";
const ListaEmpresas = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="empresaInput container">
				{store.empresas.map((item, index) => {
					return <Empresas nombre={item.nombre} key={index} id={item.id} />;
				})}
			</div>
		</>
	);
};

export default ListaEmpresas;
