import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { useHistory } from "react-router";
import Calendar from "react-calendar";
import "../../styles/Calendar.css";
import Mapa from "../component/mapa";
import { Redirect } from "react-router";
import Swal from "sweetalert2";
export const Reserva = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [usuario, setUsuario] = useState(false);
	const [linea, setLinea] = useState();
	const [asiento, setAsiento] = useState(1);
	const [value, onChange] = useState(new Date());
	const [fecha, setFecha] = useState();
	const [form, setForm] = useState();
	const [tipoDia, setTipoDia] = useState();
	console.log();
	useEffect(() => {
		setUsuario(JSON.parse(localStorage.getItem("info")).usuario_id);
	}, []);

	useEffect(
		() => {
			let date = value;
			let day = date.getDate();
			let month = date.getMonth() + 1;
			let year = date.getFullYear();

			if (month < 10) {
				setFecha(`${day}-0${month}-${year}`);
			} else {
				setFecha(`${day}-${month}-${year}`);
			}
		},
		[value]
	);

	useEffect(
		() => {
			if (asiento < 1) {
				setAsiento(1);
			}
			if (asiento > 5) {
				setAsiento(5);
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "Solo se permiten 5 asientos por reserva"
				});
			}
		},
		[asiento]
	);

	useEffect(() => {
		let x = value.toString();

		if (
			x.includes("Jan 01") ||
			x.includes("May 01") ||
			x.includes("Jul 18") ||
			x.includes("Aug 25") ||
			x.includes("Dec 25")
		) {
			setTipoDia("Feriado");
		} else if (
			x.includes("Mon") ||
			x.includes("Tue") ||
			x.includes("Wed") ||
			x.includes("Thu") ||
			x.includes("Fri")
		) {
			setTipoDia("Habil");
		} else if (x.includes("Sat")) {
			setTipoDia("Sabado");
		} else if (x.includes("Sun")) {
			setTipoDia("Domingo");
		}
	});

	const handleSubmit = event => {
		event.preventDefault();
		actions.addReserva(linea, form, usuario, asiento, fecha);
	};

	return (
		<>
			<div className="text-center bg-dark container mt-5 border border-dark rounded">
				<h1 className="display-2 text-light p-5">Reservas</h1>
				<form onSubmit={handleSubmit}>
					<div className="pb-3">
						<div className="container row mx-auto">
							<select
								id="mySelect"
								className="form-select parada col-md tabla mx-1 text-light border border-dark rounded text-center"
								onChange={e => setLinea(e.target.value)}>
								<option className="bg-select parada" defaultValue>
									Linea
								</option>
								{store.lineas.map((item, index) => {
									return (
										<option className="text-center bg-select parada" key={index} value={item.id}>
											{item.nombre_linea}
										</option>
									);
								})}
							</select>
							{store.lineas.map(item => {
								return (
									<>
										{linea == item.id ? (
											<div className="col-md tabla text-light mx-1 border border-dark rounded text-center parada">
												<p className="mt-3">{item.destino}</p>
											</div>
										) : null}
									</>
								);
							})}
						</div>
					</div>
					<div className="container pb-3 my-5">
						<Calendar
							className="m-auto bg-dark border rounded border-dark"
							onChange={onChange}
							value={value}
						/>
					</div>
					<div className="row container m-auto my-5">
						{store.paradas.map(parada => {
							return (
								<>
									{linea == parada.id_linea ? (
										<>
											<div key={parada.ubicacion} className="col-md container tabla text-light ">
												<ul className="parada list-group  my-2 list-group-flush">
													<span className="form-inline m-auto">
														{parada.ubicacion}{" "}
														<i
															className="fas fa-map-marker-alt fa-sm ms-2 iconoParada"
															data-toggle="modal"
															data-target={"#" + parada.id}
														/>
														<div
															className="modal fade"
															id={parada.id}
															tabIndex="-1"
															role="dialog"
															aria-hidden="true">
															<div className="modal-dialog" role="document">
																<div className="modal-content">
																	<Mapa
																		latitud={parada.latitud}
																		longitud={parada.longitud}
																		ubicacion={parada.ubicacion}
																	/>
																</div>
															</div>
														</div>
													</span>
													{store.horarios.map(horario => {
														return (
															<>
																{horario.tipo_dia == tipoDia ? (
																	<>
																		{parada.id == horario.id_parada ? (
																			<>
																				<li className="list-group-item liColor text-light">
																					<input
																						className="inputReserva"
																						id={horario.hora}
																						type="checkbox"
																						name={horario.hora_id}
																						value={horario.id}
																						onClick={e =>
																							setForm(e.target.value)
																						}
																					/>
																					<label
																						className="labelReserva pt-1 hora bg-dark border border-dark rounded"
																						htmlFor={horario.hora}>
																						{horario.hora}
																					</label>
																				</li>
																			</>
																		) : null}
																	</>
																) : null}
															</>
														);
													})}
												</ul>
											</div>
										</>
									) : null}
								</>
							);
						})}
					</div>
					{form && (
						<>
							<div className="container col-xs-12 tabla  p-3 my-5 m-auto">
								<div className="text-light d-flex justify-content-center">
									<div className=" mt-2">
										<p className="asientos"> Cantidad de asientos: {asiento} </p>
									</div>
									<span className="ms-3 mt-3" onClick={() => setAsiento(asiento + 1)}>
										<i className="fas fa-plus botonAsiento" />
									</span>
									<span className="ms-3 mt-3 " onClick={() => setAsiento(asiento - 1)}>
										<i className="fas fa-minus botonAsiento" />
									</span>
								</div>
								<button type="submit" className="btn btn-dark btn-block mt-3 boton">
									Confirmar
								</button>
							</div>
						</>
					)}
				</form>
			</div>
			{store.reload && <Redirect to="/confirmacion/" />}
		</>
	);
};
