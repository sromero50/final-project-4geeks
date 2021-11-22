const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			horarios: [],
			paradas: [],
			lineas: [],
			empresas: [],
			admin: localStorage.getItem("admin"),
			user: localStorage.getItem("user"),
			empresa: localStorage.getItem("empresa"),
			login: JSON.parse(localStorage.getItem("login")),
			error: "",
			info: [JSON.parse(localStorage.getItem("info"))]
		},
		actions: {
			getHorarios: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/horario");
					const responseBody = await response.json();
					setStore({ horarios: responseBody });
				} catch (error) {
					console.log(error);
				}
			},
			getParadas: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/parada");
					const responseBody = await response.json();
					setStore({ paradas: responseBody });
				} catch (error) {
					console.log(error);
				}
			},
			getLineas: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/linea");
					const responseBody = await response.json();
					setStore({ lineas: responseBody });
				} catch (error) {
					console.log(error);
				}
			},

			loginUser: async (email, password) => {
				const store = getStore();
				try {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					var raw = JSON.stringify({
						email: email,
						password: password
					});

					var requestOptions = {
						method: "POST",
						headers: myHeaders,
						body: raw,
						redirect: "follow"
					};

					const response = await fetch(process.env.BACKEND_URL + "/api/usuario/login", requestOptions);
					const responseBody = await response.json();
					if (responseBody.token) {
						console.log([responseBody]);
						localStorage.setItem("user", responseBody.token);
						localStorage.setItem("login", true);
						localStorage.setItem("info", JSON.stringify(responseBody));
						setStore({ info: [responseBody] });
						setStore({ user: true });
						setStore({ login: true });
					}
				} catch (error) {
					console.log("error", error);

					setStore({ error: error });
				}
			},

			loginEmpresa: async (email, password) => {
				const store = getStore();
				try {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					var raw = JSON.stringify({
						email: email,
						password: password
					});

					var requestOptions = {
						method: "POST",
						headers: myHeaders,
						body: raw,
						redirect: "follow"
					};

					const response = await fetch(process.env.BACKEND_URL + "/api/empresa/login", requestOptions);
					const responseBody = await response.json();
					if (responseBody.token) {
						localStorage.setItem("empresa", responseBody.token);
						localStorage.setItem("login", true);
						localStorage.setItem("info", JSON.stringify(responseBody));
						setStore({ info: [responseBody] });
						setStore({ empresa: true });
						setStore({ login: true });
					}
				} catch (error) {
					console.log("error", error);

					setStore({ error: error });
				}
			},

			loginAdmin: async (email, password) => {
				const store = getStore();
				try {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					var raw = JSON.stringify({
						email: email,
						password: password
					});

					var requestOptions = {
						method: "POST",
						headers: myHeaders,
						body: raw,
						redirect: "follow"
					};
					const response = await fetch(process.env.BACKEND_URL + "/api/admin/login", requestOptions);
					const responseBody = await response.json();
					if (responseBody.token) {
						localStorage.setItem("admin", responseBody.token);
						localStorage.setItem("login", true);
						localStorage.setItem("info", JSON.stringify(responseBody));
						setStore({ info: [responseBody] });
						setStore({ admin: true });
						setStore({ login: true });
					}
				} catch (error) {
					console.log("error", error);

					setStore({ error: error });
				}
			},
			logout: () => {
				const store = getStore();
				setStore({ admin: localStorage.removeItem("admin") });
				setStore({ user: localStorage.removeItem("user") });
				setStore({ empresa: localStorage.removeItem("empresa") });
				setStore({ login: localStorage.removeItem("login") });
				setStore({ login: localStorage.removeItem("info") });
			},

			registroUsuario: (nombre, email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					nombre: nombre,
					email: email,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/usuario/registrar", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			registroEmpresa: (nombre, email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					nombre: nombre,
					email: email,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/empresa/registrar", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			getEmpresas: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/empresa");
					const responseBody = await response.json();
					setStore({ empresas: responseBody });
				} catch (error) {
					console.log(error);
				}
			},
			deleteEmpresa: id => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("admin"));
				myHeaders.append("Content-Type", "application/json");

				var raw = "";

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/empresa/" + id, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));

				const store = getStore();
				const newList = store.empresas.filter(item => item.id !== id);
				setStore({ empresas: newList });
				if (newList.length === 0) {
					setStore({ empresas: [] });
				}
			},
			editEmpresa: (id, nombre, email) => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("admin"));
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					nombre: nombre,
					email: email
				});

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/empresa/" + id, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			addLinea: async (numero_linea, origen, destino) => {
				const token = localStorage.getItem("empresa");

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + token);

				var raw = JSON.stringify({
					numero_linea: numero_linea,
					origen: origen,
					destino: destino
				});
				const response = await fetch(process.env.BACKEND_URL + "/api/linea/", requestOptions);
				const data = await response.json();
				//.then(response => response.json())
				//.then(result => localStorage.setItem("token", result.token))
				//.catch(error => console.log("error", error));
				console.log(data);
			},

			addParada: async ubicacion => {
				const token = localStorage.getItem("empresa");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + token);

				var raw = JSON.stringify({
					ubicacion: ubicacion
				});
				const response = await fetch(process.env.BACKEND_URL + "/api/parada/", requestOptions);
				const data = await response.json();
				//.then(response => response.json())
				//.then(result => localStorage.setItem("token", result.token))
				//.catch(error => console.log("error", error));
				console.log(data);
			},

			addHorario: async (id_linea, id_parada, tipo_dia, hora) => {
				const token = localStorage.getItem("empresa");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + token);

				var raw = JSON.stringify({
					id_linea: id_linea,
					id_parada: id_parada,
					tipo_dia: tipo_dia,
					hora: hora
				});
				const response = await fetch(process.env.BACKEND_URL + "/api/horario/", requestOptions);
				const data = await response.json();
				//.then(response => response.json())
				//.then(result => localStorage.setItem("token", result.token))
				//.catch(error => console.log("error", error));
				console.log(data);
			},
			deleteLinea: id => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("empresa"));
				myHeaders.append("Content-Type", "application/json");

				var raw = "";

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/linea/" + id, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));

				const store = getStore();
				const newList = store.lineas.filter(item => item.id !== id);
				setStore({ lineas: newList });
				if (newList.length === 0) {
					setStore({ lineas: [] });
				}
			},
			deleteParada: id => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("empresa"));
				myHeaders.append("Content-Type", "application/json");

				var raw = "";

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/parada/" + id, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));

				const store = getStore();
				const newList = store.paradas.filter(item => item.id !== id);
				setStore({ paradas: newList });
				if (newList.length === 0) {
					setStore({ paradas: [] });
				}
			},
			deleteHorario: id => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("empresa"));
				myHeaders.append("Content-Type", "application/json");

				var raw = "";

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/horario/" + id, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));

				const store = getStore();
				const newList = store.horarios.filter(item => item.id !== id);
				setStore({ horarios: newList });
				if (newList.length === 0) {
					setStore({ horarios: [] });
				}
			},
			editLinea: (id, nombre_linea) => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("empresa"));
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					id: id,
					nombre_linea: nombre_linea
				});

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/linea/" + id, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			editParada: (id, ubicacion) => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("empresa"));
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					ubicacion: ubicacion
				});

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/parada/" + id, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			editHorario: (id, id_linea, id_parada, tipo_dia, hora) => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("empresa"));
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					id_linea: id_linea,
					id_parada: id_parada,
					tipo_dia: tipo_dia,
					hora: hora
				});

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/horario/" + id, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			myFunction: item => {
				//var x = document.getElementById("mySelect").value;
				//return x;
				console.log("Llegando", item);
			}
		}
	};
};

export default getState;
