const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			horarios: [],
			paradas: [],
			lineas: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getHorarios: async () => {
				const store = getStore();
				if (localStorage.getItem("horarios") == null) {
					try {
						const response = await fetch(
							"https://3001-blush-grasshopper-6lpz9aqn.ws-us18.gitpod.io/api/horario"
						);
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
						const response = await fetch(
							"https://3001-blush-grasshopper-6lpz9aqn.ws-us18.gitpod.io/api/parada"
						);
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
						const response = await fetch(
							"https://3001-blush-grasshopper-6lpz9aqn.ws-us18.gitpod.io/api/linea"
						);
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

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				const response = await fetch(process.env.BACKEND_URL + "/api/linea/", requestOptions);
				const data = await response.json();
				//.then(response => response.json())
				//.then(result => localStorage.setItem("token", result.token))
				//.catch(error => console.log("error", error));
				console.log(data);
			},
			addHorario: async ubicacion => {
				const token = localStorage.getItem("token");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer" + token);

				var raw = JSON.stringify({
					ubicacion: ubicacion
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

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

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				const response = await fetch(process.env.BACKEND_URL + "/api/horario/", requestOptions);
				const data = await response.json();
				//.then(response => response.json())
				//.then(result => localStorage.setItem("token", result.token))
				//.catch(error => console.log("error", error));
				console.log(data);
			}
		}
	};
};

export default getState;
