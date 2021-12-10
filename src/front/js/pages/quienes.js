import React from "react";
import "../../styles/home.scss";
import maria from "../../img/maria.jpg";
import seba from "../../img/seba.png";
import fabian from "../../img/fabian.png";

const Quienes = () => {
	return (
		<div className="text-center">
			<div className="container bg-dark p-5 mt-5 border border-dark rounded">
				<h1 className="text-light display-2">¿Quienes somos?</h1>
				<p className="pt-4 text-light quienes">
					Somos Master Software Factory el equipo creador de SmartTravel. Nuestra misión, brindarles a los
					usuarios del transporte una forma de viajar más cómoda, teniendo la posibilidad de seleccionar
					horarios, destinos y asientos utilizando una aplicación de uso fácil e intuitivo.
				</p>
			</div>
			<div className="container mt-5 row text-light m-auto" style={{ fontWeight: "lighter" }}>
				<div className="col-sm-3 card bg-dark p-3 m-auto border rounded border-dark">
					<img src={maria} alt="..." className="quienes-img m-auto rounded-circle" />
					<div className="card-body">
						<h3 className="mt-2">Maria Perrone</h3>
						<p>Full-Stack Developer</p>
						<p>Estudiante licenciatura en TI</p>
						<p>Profesora de inglés</p>
					</div>
				</div>
				<div className="col-sm-3 card bg-dark p-3 border rounded border-dark">
					<img src={seba} alt="..." className="quienes-img m-auto rounded-circle" />

					<h3 className="mt-2">Sebastian Romero</h3>
					<p>Full-Stack Developer</p>
					<p>Estudiante de traductorado de inglés</p>
					<p>Estudiante de analista programador</p>
				</div>
				<div className="col-sm-3 card bg-dark p-3 m-auto border rounded border-dark">
					<img src={fabian} alt="..." className="quienes-img m-auto rounded-circle" />
					<div className="card-body">
						<h3 className="mt-2 card-title">Fabian Lopez</h3>
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
