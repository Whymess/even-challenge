import React from "react";

//local dependencies
import "./index.css";
import logo from "../../Assets/Images/logo.png";

export default props => {
	return (
		<nav className="navbar">
			<h1 className="navbar-brand">
				<img
					src={logo}
					alt=""
					style={{ width: "5em", height: "1em" }}
				/>
			</h1>
		</nav>
	);
};
