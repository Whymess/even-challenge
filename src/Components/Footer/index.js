import React from "react";

//local dependencies
import "./index.css";

export default props => {
	let { title } = props;
	return (
		<footer className="footer mt-4 ml-auto">
			<p className="footer-text">© {title}</p>
		</footer>
	);
};
