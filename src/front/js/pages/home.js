import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<div className="jumbotron body">
				<h1 className="display-2 text-white pb-3">SmartTravel</h1>
				<p className="display-5 p-5 text-white">
					En SmartTravel tenemos todo para asegurar tu comodidad al viajar en ómnibus: horarios, reservas de
					asientos y más. <br />
					¡Animate a conocernos!
				</p>
				{!store.login && (
					<p className="lead p-5">
						<a className="btn btn-dark btn-lg boton" href="/registrate" role="button">
							Registrate
						</a>
					</p>
				)}
			</div>
		</div>
	);
};
