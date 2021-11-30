import React from "react";
import "../../styles/home.scss";

const Quienes = () => {
	return (
		<div className="text-center body">
			<div className="container">
				<h1 className="display-3 text-white">¿Quienes somos?</h1>
				<p className="pt-4 text-white display-5 quienes">
					SmartTravel fue creada en 2021 por el grupo Master Software Factory con el objetivo de acercar a los
					usuarios del transporte hacia una forma de viajar más cómoda, teniendo la capacidad de seleccionar
					horarios, destinos y asientos de una forma fácil e inteligente. Además, promocionamos el transporte
					colectivo, reduciendo las emisiones de carbono causadas por otros medios de transporte.
				</p>
			</div>
			<div className="container marketing mt-2">
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

						<h2>Heading</h2>
						<p>
							Some representative placeholder content for the three columns of text below the carousel.
							This is the first column.
						</p>
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

						<h2>Heading</h2>
						<p>
							Another exciting bit of representative placeholder content. This time, weve moved on to the
							second column.
						</p>
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

						<h2>Heading</h2>
						<p>And lastly this, the third column of representative placeholder content.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quienes;
