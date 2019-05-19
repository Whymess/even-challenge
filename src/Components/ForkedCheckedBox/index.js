import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

//local dependencies
import "./index.css";

export default props => {
	let { title, handleChangeForkedCheckedBox, includeForked } = props;
	return (
		<FormGroup className="checked-box-styles-forked">
			<FormControlLabel
				control={
					<Checkbox
						checked={includeForked}
						onChange={handleChangeForkedCheckedBox("fork")}
					/>
				}
				label={title}
			/>
		</FormGroup>
	);
};
