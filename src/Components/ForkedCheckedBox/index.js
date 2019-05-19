import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

//local dependencies
import "./index.css";

const ForkedCheckedBox = props => {
	let { title, handleChangeForkedCheckedBox, checked } = props;
	return (
		<FormGroup className="checked-box-styles-forked">
			<FormControlLabel
				control={
					<Checkbox
						checked={checked}
						onChange={handleChangeForkedCheckedBox("fork")}
					/>
				}
				label={title}
			/>
		</FormGroup>
	);
};

export default ForkedCheckedBox;

ForkedCheckedBox.propTypes = {
	title: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired
};
