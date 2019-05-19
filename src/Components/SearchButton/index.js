import React from "react";

//local dependencies
import "./index.css";

export default props => {
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
