import React from "react";
import PropTypes from "prop-types";

const TextInput = props => {
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

TextInput.propTypes = {
	title: PropTypes.string.isRequired,
	onFocus: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired,
	error: PropTypes.bool.isRequired
};

export default TextInput;
