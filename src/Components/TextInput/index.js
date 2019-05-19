import React from "react";

export default props => {
	let { title, handleChange, onFocus, error, errorMessage } = props;
	return (
		<div className="form-group ">
			<div className="d-flex flex-column">
				<label className="title-input">{title}</label>
				<input
					onFocus={() => onFocus()}
					onChange={handleChange}
					type="text"
					name="repoName"
					className={error ? " form-control error" : "form-control "}
				/>
				{error ? (
					<label className="error-text"> {errorMessage}</label>
				) : (
					""
				)}
			</div>
		</div>
	);
};
