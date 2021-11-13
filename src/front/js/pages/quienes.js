import React from "react";
import "../../styles/home.scss";

const Quienes = () => {
	return (
		<div className="text-center m-0">
			<div className="jumbotron body">
				<h1 className="display-3 text-white">¿Quienes somos?</h1>
				<p className="pt-4 text-white display-5 quienes">
					SmartTravel fue creada en 2021 por el grupo Master Software Factory con el objetivo de acercar a los
					usuarios del transporte hacia una forma de viajar más cómoda, teniendo la capacidad de seleccionar
					horarios, destinos y asientos de una forma fácil e inteligente. Además, promocionamos el transporte
					colectivo, reduciendo las emisiones de carbono causadas por otros medios de transporte.
				</p>
			</div>
		</div>
	);
};

export default Quienes;
