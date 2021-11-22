import React, { useState, useEffect } from "react";
import ListaEmpresas from "../component/listaEmpresas";
import AddEmpresa from "../component/addEmpresa";
import AuthContext from "../Auth/authContext";
import NotFound from "../component/notFound";

const Admin = () => {
	const [add, setAdd] = useState(false);

	return (
		<AuthContext.Consumer>
			{context => (
				<>
					{!context.admin && <NotFound />}
					{context.admin && (
						<>
							<div className="text-center body">
								<h1 className="display-2 text-white p-3">Administración</h1>
								<ListaEmpresas />
								<span onClick={() => setAdd(!add)}>
									<i className="fas fa-plus" />
								</span>
								{add == true ? <AddEmpresa /> : null}
							</div>
						</>
					)}
				</>
			)}
		</AuthContext.Consumer>
	);
};

export default Admin;
