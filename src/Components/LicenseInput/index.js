import React from "react";
import PropTypes from "prop-types";

// local dependencies
import "./index.css";

const LicenseInput = props => {
	let { title, handleChange, onFocus, error, errorMessage } = props;
	return (
		<div className="form-group ">
			<div className="d-flex flex-column">
				<label className="title-input">{title}</label>
				<select
					onFocus={() => onFocus()}
					name="lisenceAgreement"
					onChange={handleChange}
					className={error ? " form-control error" : "form-control "}
				>
					<option defaultValue label="Select License:" />
					<option value="mit">MIT License</option>
				</select>
			</div>
			{error ? <label className="error-text"> {errorMessage}</label> : ""}
		</div>
	);
};

export default LicenseInput;

LicenseInput.propTypes = {
	title: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	error: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired
};
