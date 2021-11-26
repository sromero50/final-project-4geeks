import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { useHistory } from "react-router";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
export const Reserva = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [usuario, setUsuario] = useState(false);
	const [linea, setLinea] = useState();
	const [asiento, setAsiento] = useState(1);

	const [form, setForm] = useState();
	console.log(store.reservaConfirmada);
	useEffect(() => {
		setUsuario(JSON.parse(localStorage.getItem("info")).usuario_id);
	}, []);

	const handleSubmit = event => {
		event.preventDefault();
		actions.addReserva(linea, form, usuario, asiento);
	};

	return (
		<>
			<div className="text-center body">
				<h1 className="display-2 text-white p-5">Reservas</h1>
				<form onSubmit={handleSubmit}>
					<div className="pb-5">
						<div className="row w-75 mx-auto">
							<select
								id="mySelect"
								className="form-select col mx-5 bg-dark text-light  border border-secondary rounded text-center"
								onChange={e => setLinea(e.target.value)}>
								<option defaultValue>Linea</option>
								{store.lineas.map((item, index) => {
									return (
										<option className="text-center" key={index} value={item.id}>
											{item.nombre_linea}
										</option>
									);
								})}
							</select>
							<select
								className="form-select col mx-5 bg-dark text-light  border border-secondary rounded text-center"
								aria-label="Default select example">
								<option defaultValue>Tipo de Día</option>
								{store.horarios.map((item, index) => {
									return (
										<option className="text-center" key={index} value={item.tipo_dia}>
											{item.tipo_dia}
										</option>
									);
								})}
							</select>
						</div>
					</div>
					<div className="row container m-auto w-50">
						{store.paradas.map(parada => {
							return (
								<>
									{linea == parada.id_linea ? (
										<>
											<div
												key={parada.ubicacion}
												className="col border border-secondary rounded tabla container bg-dark text-light ">
												<ul className="parada list-group  my-2 list-group-flush">
													{parada.ubicacion}
													{store.horarios.map(horario => {
														return (
															<>
																{parada.id == horario.id_parada ? (
																	<li className="list-group-item text-light bg-dark">
																		<input
																			className="inputReserva"
																			id={horario.hora}
																			type="checkbox"
																			name={horario.hora_id}
																			value={horario.id}
																			onClick={e => setForm(e.target.value)}
																		/>
																		<label
																			className="labelReserva pt-1 hora border border-secondary rounded"
																			htmlFor={horario.hora}>
																			{horario.hora}
																		</label>
																	</li>
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
					<div className="container selectorAsientos tabla bg-dark border-secondary border rounded  mt-5 m-auto">
						<div className="text-light d-flex align-items-center">
							<div className="ms-3 mt-2">
								<p className="asientos"> Cantidad de asientos: {asiento} </p>
							</div>
							<span className="ms-3 mb-1" onClick={() => setAsiento(asiento + 1)}>
								<i className="fas fa-plus botonAsiento" />
							</span>
							<span className="ms-3 mb-1 " onClick={() => setAsiento(asiento - 1)}>
								<i className="fas fa-minus botonAsiento" />
							</span>
						</div>
						<button type="submit" className="btn btn-light btn-block mb-1">
							Reservar
						</button>
					</div>
					{/* <div className="container mt-5">
				<Calendar className="m-auto" onChange={onChange} value={value} />
			</div> */}
					{/* <div className="m-auto container text-light w-25 mt-5">
				<div className="row bg-dark ">
					<input className="inputAsiento" id="1" type="checkbox" name="1" value="1" />
					<label className="labelAsiento col border" htmlFor="1">
						1
					</label>

					<input className="inputAsiento" id="2" type="checkbox" name="2" value="2" />
					<label className="labelAsiento col border" htmlFor="2">
						2
					</label>
					<div className="col-1" />
					<input className="inputAsiento" id="3" type="checkbox" name="3" value="3" />
					<label className="labelAsiento col border" htmlFor="3">
						3
					</label>
					<input className="inputAsiento" id="4" type="checkbox" name="4" value="4" />
					<label className="labelAsiento col border" htmlFor="4">
						4
					</label>
				</div>
				<div className="row bg-dark ">
					<input className="inputAsiento" id="5" type="checkbox" name="5" value="5" />
					<label className="labelAsiento col border" htmlFor="5">
						5
					</label>

					<input className="inputAsiento" id="6" type="checkbox" name="6" value="6" />
					<label className="labelAsiento col border" htmlFor="6">
						6
					</label>
					<div className="col-1" />
					<input className="inputAsiento" id="7" type="checkbox" name="7" value="7" />
					<label className="labelAsiento col border" htmlFor="7">
						7
					</label>
					<input className="inputAsiento" id="8" type="checkbox" name="8" value="8" />
					<label className="labelAsiento col border" htmlFor="8">
						8
					</label>
				</div>
				<div className="row bg-dark ">
					<input className="inputAsiento" id="9" type="checkbox" name="9" value="9" />
					<label className="labelAsiento col border" htmlFor="9">
						9
					</label>

					<input className="inputAsiento" id="10" type="checkbox" name="10" value="10" />
					<label className="labelAsiento col border" htmlFor="10">
						10
					</label>
					<div className="col-1" />
					<input className="inputAsiento" id="11" type="checkbox" name="11" value="11" />
					<label className="labelAsiento col border" htmlFor="11">
						11
					</label>
					<input className="inputAsiento" id="12" type="checkbox" name="12" value="12" />
					<label className="labelAsiento col border" htmlFor="12">
						12
					</label>
				</div>
				<div className="row bg-dark ">
					<input className="inputAsiento" id="13" type="checkbox" name="13" value="13" />
					<label className="labelAsiento col border" htmlFor="13">
						13
					</label>

					<input className="inputAsiento" id="14" type="checkbox" name="14" value="14" />
					<label className="labelAsiento col border" htmlFor="14">
						14
					</label>
					<div className="col-1" />
					<input className="inputAsiento" id="15" type="checkbox" name="15" value="15" />
					<label className="labelAsiento col border" htmlFor="15">
						15
					</label>
					<input className="inputAsiento" id="16" type="checkbox" name="16" value="16" />
					<label className="labelAsiento col border" htmlFor="16">
						16
					</label>
				</div>
				<div className="row bg-dark ">
					<input className="inputAsiento" id="17" type="checkbox" name="17" value="17" />
					<label className="labelAsiento col border" htmlFor="17">
						17
					</label>

					<input className="inputAsiento" id="18" type="checkbox" name="18" value="18" />
					<label className="labelAsiento col border" htmlFor="18">
						18
					</label>
					<div className="col-1" />
					<input className="inputAsiento" id="19" type="checkbox" name="19" value="19" />
					<label className="labelAsiento col border" htmlFor="19">
						19
					</label>
					<input className="inputAsiento" id="20" type="checkbox" name="20" value="20" />
					<label className="labelAsiento col border" htmlFor="20">
						20
					</label>
				</div>
			</div> */}
				</form>
			</div>
			{store.reload && <Redirect to="/confirmacion/" />}
		</>
	);
};
