import React, { Component } from "react";
import PropTypes from "prop-types";

// local dependencies
import "./index.css";
import { checkArray } from "../Helpers/";

export default class StarsInput extends Component {
	onKeyPress = e => {
		const keyCode = e.keyCode || e.which;
		const keyValue = String.fromCharCode(keyCode);
		if (/\+|-/.test(keyValue)) e.preventDefault();
	};

	render() {
		let {
			handleStarChange,
			atLeast,
			range,
			exact,
			error,
			onFocus
		} = this.props;

		return (
			<div className="form-group mt-2">
				<div className="col">
					<div className="row">
						<div id="header-instructions">
							Show me repositories with star ratings that:
						</div>
					</div>
					<div className="form-group mt-3">
						<div className="col">
							<div className="row">
								<span id="input-instructions">
									Match Exactly
								</span>
								<input
									disabled={
										atLeast.length > 0 || checkArray(range)
									}
									onKeyPress={this.onKeyPress}
									min="0"
									onChange={handleStarChange()}
									name="exact"
									type="number"
									className="number-input"
								/>
							</div>
						</div>
						<div className="col mt-4">
							<div className="row">
								<span id="input-instructions">
									Have this range from
								</span>
								<input
									onFocus={onFocus}
									disabled={
										exact.length > 0 || atLeast.length > 0
									}
									onKeyPress={this.onKeyPress}
									min="0"
									onChange={handleStarChange("0")}
									type="number"
									name="range"
									className="number-input"
								/>
								to
								<input
									onFocus={onFocus}
									disabled={
										exact.length > 0 || atLeast.length > 0
									}
									onKeyPress={this.onKeyPress}
									min="0"
									onChange={handleStarChange("1")}
									type="number"
									name="range"
									className="number-input"
								/>
								{error ? (
									<label className="error-text">
										The range is not correct
									</label>
								) : (
									""
								)}
							</div>
						</div>
						<div className="col mt-4">
							<div className="row">
								<span id="input-instructions">
									Have at least
								</span>
								<input
									disabled={
										exact.length > 0 || checkArray(range)
									}
									onKeyPress={this.onKeyPress}
									min="0"
									onChange={handleStarChange()}
									type="number"
									name="atLeast"
									className="number-input"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

StarsInput.propTypes = {
	handleStarChange: PropTypes.func.isRequired,
	atLeast: PropTypes.string.isRequired,
	range: PropTypes.array.isRequired,
	exact: PropTypes.string.isRequired,
	error: PropTypes.bool.isRequired,
	onFocus: PropTypes.func.isRequired
};
