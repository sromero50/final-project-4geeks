const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			horarios: [],
			paradas: [],
			lineas: [],
			empresas: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getHorarios: async () => {
				const store = getStore();
				if (localStorage.getItem("horarios") == null) {
					try {
						const response = await fetch(process.env.BACKEND_URL + "/api/horario");
						const responseBody = await response.json();
						setStore({ horarios: responseBody });
						localStorage.setItem("horarios", JSON.stringify(store.horarios));
						console.log(responseBody);
					} catch (error) {
						console.log(error);
					}
				} else {
					setStore({ horarios: JSON.parse(localStorage.getItem("horarios")) });
				}
			},
			getParadas: async () => {
				const store = getStore();
				if (localStorage.getItem("paradas") == null) {
					try {
						const response = await fetch(process.env.BACKEND_URL + "/api/parada");
						const responseBody = await response.json();
						setStore({ paradas: responseBody });
						localStorage.setItem("paradas", JSON.stringify(store.paradas));
						console.log(responseBody);
					} catch (error) {
						console.log(error);
					}
				} else {
					setStore({ paradas: JSON.parse(localStorage.getItem("paradas")) });
				}
			},
			getLineas: async () => {
				const store = getStore();
				if (localStorage.getItem("lineas") == null) {
					try {
						const response = await fetch(process.env.BACKEND_URL + "/api/linea");
						const responseBody = await response.json();
						setStore({ lineas: responseBody });
						localStorage.setItem("lineas", JSON.stringify(store.lineas));
						console.log(responseBody);
					} catch (error) {
						console.log(error);
					}
				} else {
					setStore({ lineas: JSON.parse(localStorage.getItem("lineas")) });
				}
			},

			loginUser: (email, password) => {
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

				fetch(process.env.BACKEND_URL + "/api/usuario/login", requestOptions)
					.then(response => response.json())
					.then(result => localStorage.setItem("token", result.token))
					.catch(error => console.log("error", error));
			},

			loginEmpresa: (email, password) => {
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

				fetch(process.env.BACKEND_URL + "/api/empresa/login", requestOptions)
					.then(response => response.json())
					.then(result => localStorage.setItem("token", result.token))
					.catch(error => console.log("error", error));
			},

			loginAdmin: (email, password) => {
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

				fetch(process.env.BACKEND_URL + "/api/admin/login", requestOptions)
					.then(response => response.json())
					.then(result => localStorage.setItem("token", result.token))
					.catch(error => console.log("error", error));
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

					console.log(responseBody);
				} catch (error) {
					console.log(error);
				}
			},
			deleteEmpresa: id => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
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
			editEmpresa: (id, nombre) => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					nombre: nombre
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
				const token = localStorage.getItem("token");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer" + token);

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
				const token = localStorage.getItem("token");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer" + token);

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

			addHorario: async (dia, hora) => {
				const token = localStorage.getItem("token");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer" + token);

				var raw = JSON.stringify({
					dia: dia,
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
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
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
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
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
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
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
			editLinea: (id, numero_linea, origen, destino) => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					id: id,
					numero_linea: numero_linea,
					origen: origen,
					destino: destino
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
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
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
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
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
			}
		}
	};
};

export default getState;
