import React from "react";
const Loading = props => {
	const { active } = props;

	return (
		<>
			{active ? (
				<>{props.children}</>
			) : (
				<div className="d-flex justify-content-center body">
					<div className="spinner-grow text-dark mt-3 mx-2" role="status" />
					<div className="spinner-grow text-dark mt-3 mx-2" role="status" />
					<div className="spinner-grow text-dark mt-3 mx-2" role="status" />
				</div>
			)}
		</>
	);
};

export default Loading;
