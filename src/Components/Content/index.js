import React from "react";

// local dependencies
import "./index.css";

export default props => {
	let { license, stargazers_count, description, name, fork } = props;
	return (
		<div className="container border mt-4">
			<div className="row">
				<div className="col-lg-8">
					<div className="row">
						<div className="col">
							<div className="d-flex">
								<div className="col-lg-10">
									<h4 className="title d-flex justify-content-center">
										{name}
									</h4>
								</div>
								{fork ? (
									<div className="col-lg-2 d-flex flex-row-reverse">
										<button className="forked-button">
											Forked
										</button>
									</div>
								) : (
									""
								)}
							</div>
							<div className="desc">{description}</div>
						</div>
					</div>
				</div>
				<div className="col-lg-2 border-left border-right">
					stars
					<strong className="result-text">{stargazers_count}</strong>
				</div>
				<div className="col-lg-2">
					Lisence
					<strong className="result-text"> {license["name"]} </strong>
				</div>
			</div>
		</div>
	);
};
