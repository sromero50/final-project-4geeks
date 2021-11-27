import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import AddHorario from "./addHorario";
const EditHora = props => {
	const [edit, setEdit] = useState(true);
	const [form, setForm] = useState({ tipo_dia: props.tipo_dia, hora: props.hora });
	const { store, actions } = useContext(Context);
	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};
	console.log(form);
	const handleSubmit = event => {
		event.preventDefault();
		actions.editHorario(props.id, props.id_linea, props.id_parada, form.tipo_dia, form.hora);
	};
	return (
		<>
			<form className="horaEmpresa" onSubmit={handleSubmit}>
				<input
					name="hora"
					onChange={handleChange}
					type="text"
					value={form.hora}
					className="form-control  text-center"
					readOnly={edit}
				/>
				<span className="mt-1 mx-2">
					<i onClick={() => actions.deleteHorario(props.id)} className="fas fa-times" />
				</span>
				<span className="mt-1">
					<i onClick={() => setEdit(!edit)} className="far fa-edit" />
				</span>
			</form>
		</>
	);
};

export default EditHora;

EditHora.propTypes = {
	id: PropTypes.number,
	tipo_dia: PropTypes.string,
	hora: PropTypes.string,
	id_linea: PropTypes.number,
	id_parada: PropTypes.number
};
