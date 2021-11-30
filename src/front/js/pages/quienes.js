import React from "react";
import "../../styles/home.scss";

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
			<div className="container marketing mt-4">
				<div className="row text-light " style={{ fontWeight: "lighter" }}>
					<div className="col-lg-4 bg-dark p-3 w-25 m-auto border rounded border-secondary tabla">
						<svg
							className="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#777" />
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>

						<h2 className="mt-2">Maria Perrone</h2>
						<p>Full-Stack Developer</p>
						<p>Estudiante LTI</p>
						<p>Profesora de inglés</p>
					</div>
					<div className="col-lg-4 bg-dark p-3 w-25 m-auto border rounded border-secondary tabla">
						<svg
							className="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#777" />
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>

						<h2 className="mt-2">Sebastian Romero</h2>
						<p>Full-Stack Developer</p>
						<p>Estudiante de traductorado de inglés</p>
						<p>Estudiante de Analista programador</p>
					</div>
					<div className="col-lg-4 bg-dark p-3 w-25 m-auto border rounded border-secondary tabla">
						<svg
							className="bd-placeholder-img rounded-circle "
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#777" />
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>

						<h2 className="mt-2">Fabian Lopez</h2>
						<p>Full-Stack Developer</p>
						<p>Estudiante LTI</p>
						<p>MT Redes y telecomunicaciones</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quienes;
