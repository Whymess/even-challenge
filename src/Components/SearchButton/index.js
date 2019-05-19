import React from "react";
import PropTypes from "prop-types";

//local dependencies
import "./index.css";

const SearchButton = props => {
	let { title, handleSubmit, isLoading } = props;
	return (
		<button
			disabled={isLoading}
			onClick={handleSubmit}
			type="button"
			className="submit"
		>
			{title}
		</button>
	);
};

export default SearchButton;

SearchButton.propTypes = {
	title: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired
};
