import AuthContext from "./authContext";
import React, { useState } from "react";
import PropTypes from "prop-types";
function AuthProvider(props) {
	const [admin, setAdmin] = useState(false);
	const [user, setUser] = useState(false);
	const [empresa, setEmpresa] = useState(false);
	const [login, setLogin] = useState(false);

	const loginAdministrador = () => {
		setAdmin(true);
		setLogin(true);
	};

	const loginUsuario = () => {
		setUser(true);
		setLogin(true);
	};

	const loginEmpresa = () => {
		setEmpresa(true);
		setLogin(true);
	};

	const logout = () => {
		setLogin(false);
		setAdmin(false);
		setUser(false);
		setEmpresa(false);
	};
	return (
		<AuthContext.Provider
			value={{
				login,
				admin,
				user,
				empresa,
				loginAdministrador,
				loginUsuario,
				loginEmpresa,
				logout
			}}>
			{props.children}
		</AuthContext.Provider>
	);
}
AuthProvider.propTypes = {
	children: PropTypes.array
};
export default AuthProvider;
