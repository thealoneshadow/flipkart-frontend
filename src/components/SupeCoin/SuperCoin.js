/** @format */

import React from "react";
import Card from "../../components/UI/Card/Card";
import { TableCell } from "@mui/material";
import "./SuperCoin.css";
export default function SuperCoin() {
	const adURL =
		"https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
	return (
		<>
			<Card className="priceDetailsMain">
				{" "}
				<TableCell colSpan={2}>
					<img src={adURL} style={{ maxWidth: "330px" }} />
				</TableCell>
			</Card>
			<div
				style={{
					marginBottom: "15px",
					paddingTop: "10px",
					paddingRight: "3px",

					maxWidth: "330px",
				}}
			>
				<img
					src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_5f9216.png"
					class="safePaymentImage"
				></img>
				<span class="safePayment">
					Safe and Secure Payments. Easy returns. 100% Authentic products.
				</span>
			</div>
		</>
	);
}
