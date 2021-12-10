import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center container-fluid bg-dark p-5 mt-5">
			<div>
				<h1 className="display-2 text-white pb-3">SmartTravel</h1>
				<p className="display-5 p-5 text-white">
					En SmartTravel tenemos todo para asegurar tu comodidad al viajar en ómnibus: horarios, reservas de
					asientos y más. <br />
					¡Animate a conocernos!
				</p>
				{!store.login && (
					<p className="lead p-5">
						<a className="btn btn-dark btn-lg boton w-25 fw-bold" href="/consulta" role="button">
							Consultar horarios
						</a>
					</p>
				)}
			</div>
		</div>
	);
};
