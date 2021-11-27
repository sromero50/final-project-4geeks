import React, { useState, useContext } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { Context } from "../store/appContext";
import Mapa from "../component/mapa";
// function Map() {
// 	const { store, actions } = useContext(Context);
// 	const [marker, setMarker] = useState(null);
// 	return (
// 		<>
// 			{store.paradas.map(parada => {
// 				return (
// 					<>
// 						<GoogleMap
// 							key={parada.id}
// 							defaultZoom={15}
// 							defaultCenter={{ lat: parada.latitud, lng: parada.longitud }}>
// 							<Marker
// 								position={{ lat: parada.latitud, lng: parada.longitud }}
// 								onClick={() => setMarker(parada.ubicacion)}
// 							/>
// 							;
// 						</GoogleMap>
// 						{marker && (
// 							<InfoWindow
// 								onCloseClick={() => {
// 									setMarker(null);
// 								}}
// 								position={{ lat: parada.latitud, lng: parada.longitud }}>
// 								<div>{parada.ubicacion}</div>
// 							</InfoWindow>
// 						)}
// 					</>
// 				);
// 			})}
// 		</>
// 	);
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

const Prueba = () => {
	return <Mapa />;
};

export default Prueba;
