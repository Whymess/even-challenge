import React from "react";
import PropTypes from "prop-types";

//local dependencies
import "./index.css";

const Footer = props => {
	let { title } = props;
	return (
		<footer className="footer mt-4 ml-auto">
			<p className="footer-text">© {title}</p>
		</footer>
	);
};

export default Footer;

Footer.propTypes = {
	title: PropTypes.string.isRequired
};
