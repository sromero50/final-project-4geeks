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
			}
		}
	};
};

export default getState;
