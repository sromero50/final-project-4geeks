import React from "react";
const Loading = props => {
	const { active } = props;

	return (
		<>
			{active ? (
				<>{props.children}</>
			) : (
				<div className="d-flex justify-content-center body">
					<div className="spinner-grow text-dark mt-3 mx-2" role="status">
						<span className="sr-only">Loading...</span>
					</div>
					<div className="spinner-grow text-dark mt-3 mx-2" role="status">
						<span className="sr-only">Loading...</span>
					</div>
					<div className="spinner-grow text-dark mt-3 mx-2" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Loading;
