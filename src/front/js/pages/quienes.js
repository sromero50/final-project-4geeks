import React from "react";
import "../../styles/home.scss";
import maria from "../../img/maria.jpg";
import seba from "../../img/seba.png";
import fabian from "../../img/fabian.png";

const Quienes = () => {
	return (
		<div className="text-center body">
			<div className="container">
				<h1 className="display-3 text-white">¿Quienes somos?</h1>
				<p className="pt-4 text-white display-5 quienes">
					Somos Master Software Factory el equipo creador de SmartTravel. Nuestra misión, brindarles a los
					usuarios del transporte una forma de viajar más cómoda, teniendo la posibilidad de seleccionar
					horarios, destinos y asientos utilizando una aplicación de uso fácil e intuitivo.
				</p>
			</div>
			<div className="container marketing mt-5">
				<div className="row text-light" style={{ fontWeight: "lighter" }}>
					<div className="col-lg-4 bg-dark p-3 w-25 m-auto border rounded border-secondary tabla">
						<img src={maria} alt="..." className="quienes-img bd-placeholder-img m-auto rounded-circle" />

						<h3 className="mt-2">Maria Perrone</h3>
						<p>Full-Stack Developer</p>
						<p>Estudiante licenciatura en TI</p>
						<p>Profesora de inglés</p>
					</div>
					<div className="col-lg-4 bg-dark p-3 w-25 m-auto border rounded border-secondary tabla">
						<img src={seba} alt="..." className="quienes-img bd-placeholder-img rounded-circle" />

						<h3 className="mt-2">Sebastian Romero</h3>
						<p>Full-Stack Developer</p>
						<p>Estudiante de traductorado de inglés</p>
						<p>Estudiante de analista programador</p>
					</div>
					<div className="col-lg-4 bg-dark p-3 w-25 m-auto border rounded border-secondary tabla">
						<img src={fabian} alt="..." className="quienes-img bd-placeholder-img rounded-circle" />

						<h3 className="mt-2">Fabian Lopez</h3>
						<p>Full-Stack Developer</p>
						<p>Estudiante licenciatura en TI</p>
						<p>MT Redes y telecomunicaciones</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quienes;
