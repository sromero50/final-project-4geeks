import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Empresas from "./empresas";
const ListaEmpresas = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="empresaInput container">
				{store.empresas.map(item => {
					return <Empresas nombre={item.nombre} key={item.id} id={item.id} email={item.email} />;
				})}
			</div>
		</>
	);
};

export default ListaEmpresas;
