import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { useHistory } from "react-router";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export const Reserva = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	const [linea, setLinea] = useState();
	const [parada, setParada] = useState();
	const [value, onChange] = useState(new Date());

	console.log(value);

	return (
		<div className="text-center body">
			<h1 className="display-2 text-white p-5">Reservas</h1>
			<div className="pb-5">
				<div className="row w-75 mx-auto">
					<select
						id="mySelect"
						className="form-select col mx-5 bg-dark text-light"
						onChange={e => setLinea(e.target.value)}>
						<option selected>Linea</option>
						{store.lineas.map((item, index) => {
							return (
								<option key={index} value={item.id}>
									{item.nombre_linea}
								</option>
							);
						})}
					</select>
					<select className="form-select col mx-5 bg-dark text-light" aria-label="Default select example">
						<option selected>Tipo de Día</option>
						{store.horarios.map((item, index) => {
							return (
								<option key={index} value={item.tipo_dia}>
									{item.tipo_dia}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className="row container m-auto">
				{store.paradas.map(parada => {
					return (
						<>
							{linea == parada.id_linea ? (
								<>
									<div className="col container bg-dark text-light">
										<div className="border-bottom my-2">{parada.ubicacion}</div>
										{store.horarios.map(horario => {
											return (
												<>
													{parada.id == horario.id_parada ? (
														<>
															<input
																className="inputReserva"
																id={horario.hora}
																type="checkbox"
																name={horario.hora}
																value={horario.hora}
																onClick={e =>
																	console.log(e.target.value, parada.ubicacion, linea)
																}
															/>
															<label className="labelReserva my-2" htmlFor={horario.hora}>
																{horario.hora}
															</label>
														</>
													) : null}
												</>
											);
										})}
									</div>
								</>
							) : null}
						</>
					);
				})}
			</div>
			<div className="container mt-5">
				<Calendar className="m-auto" onChange={onChange} value={value} />
			</div>
			<div className="m-auto container text-light w-25 mt-5">
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
			</div>
		</div>
	);
};
