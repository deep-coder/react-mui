/**
 * Created by deepcoder on 06/11/16.
 */
import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { deepOrange500 } from "material-ui/styles/colors";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import R from "ramda";

const DropDown = (props) => {
	const muiTheme = getMuiTheme({
		palette: {
			accent1Color: deepOrange500,
		},
	});
	const options = props.options;
	const d = props.defaultValue;
	let defaultValue;
	if (R.find(R.propEq("value", d))(options)) {
		defaultValue = props.defaultValue || options[0].value;
	} else {
		defaultValue = options[0].value;
	}
	return (
		<MuiThemeProvider muiTheme={muiTheme}>
			<DropDownMenu value={defaultValue} onChange={props.onChange}>
				{options.map((option) => {
					return <MenuItem value={option.value} primaryText={option.label} key={option.value.toString()} />;
				})}
			</DropDownMenu>
		</MuiThemeProvider>
	);
};

DropDown.propTypes = {
	options: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			value: React.PropTypes.node.isRequired,
			label: React.PropTypes.node.isRequired
		}).isRequired
	)
};

export default DropDown;
