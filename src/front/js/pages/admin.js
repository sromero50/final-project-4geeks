import React, { useState, useContext } from "react";
import ListaEmpresas from "../component/listaEmpresas";
import NotFound from "../component/notFound";
import AddEmpresa from "../component/addEmpresa";
import { Context } from "../store/appContext";
import Loading from "../component/loading";

const Admin = () => {
	const [add, setAdd] = useState(false);
	const { store, actions } = useContext(Context);

	return (
		<>
			<Loading active={store.admin}>
				{store.admin && (
					<div className="text-center body">
						<h1 className="display-2 text-white p-5">Administración</h1>
						<ListaEmpresas />
						<span onClick={() => setAdd(!add)}>
							<i className="fas fa-plus" />
						</span>
						{add == true ? <AddEmpresa /> : null}
					</div>
				)}
				{!store.admin && <NotFound />}
			</Loading>
			{store.reload && <>{window.location.reload()}</>}
		</>
	);
};

export default Admin;
