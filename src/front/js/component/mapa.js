import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import PropTypes from "prop-types";
const Mapa = props => {
	const [marker, setMarker] = useState(null);
	const containerStyle = {
		width: "500px",
		height: "500px"
	};

	const center = {
		lat: props.latitud,
		lng: props.longitud
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyAbZniuwLzoDNp4ZcEAxcY4te4z7yxVVpA">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
				<Marker position={center} onClick={() => setMarker(props.ubicacion)} />
				{marker && (
					<InfoWindow
						onCloseClick={() => {
							setMarker(null);
						}}
						position={center}>
						<div>
							<h5 className="text-dark">{props.ubicacion}</h5>
						</div>
					</InfoWindow>
				)}
				<></>
			</GoogleMap>
		</LoadScript>
	);
};

export default Mapa;

Mapa.propTypes = {
	latitud: PropTypes.number,
	longitud: PropTypes.number,
	ubicacion: PropTypes.string
};
