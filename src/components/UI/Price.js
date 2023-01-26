/** @format */

import React from "react";
import { BiRupee } from "react-icons/bi";

/**
 * @author theAloneshadow(Divyanshu Goyal)
 * @function Price
 **/

const Price = (props) => {
	return (
		<div
			style={{
				fontSize: props.fontSize ? props.fontSize : "14px",
				fontWeight: "bold",
				margin: "5px 0",
			}}
		>
			{"₹"}
			{props.value}
		</div>
	);
};

export default Price;
