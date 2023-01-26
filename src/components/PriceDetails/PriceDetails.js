/** @format */

import React, { useState, useEffect } from "react";
import Card from "../../components/UI/Card/Card";
import { Box, Divider, Typography, styled } from "@mui/material";
import "./PriceDetails.css";
const Header = styled(Box)`
	padding: 15px 24px;
	background: #fff;
	borderbottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
	color: #878787;
`;

const Container = styled(Box)`
	padding: 15px 24px;
	background: #fff;
	& > p {
		margin-bottom: 20px;
		font-size: 14px;
	}
`;

const Price = styled(Typography)`
	float: right;
`;

const TotalAmount = styled(Typography)`
	font-size: 18px;
	font-weight: 600;
	border-top: 1px dashed #e0e0e0;
	padding: 20px 0;
	border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
	font-size: 16px;
	color: green;
`;

/**
 * @author theAloneshadow(Divyanshu Goyal)
 * @function PriceDetails
 **/

const PriceDetails = (props) => {
	return (
		<Card className="priceDetailsMain">
			{" "}
			{/* className={classes.component}> */}
			<Header>
				<Heading>PRICE DETAILS</Heading>
			</Header>
			<Divider />
			<Container>
				<Typography>
					Price ({props.totalItem} item)
					<Price component="span">₹{props.mrp}</Price>
				</Typography>
				<Typography>
					Discount
					<Price component="span">-₹{props.mrp - props.totalPrice}</Price>
				</Typography>
				<Typography>
					Delivery Charges
					<Price component="span" style={{ color: "#00cc00" }}>
						Free
					</Price>
				</Typography>
				<TotalAmount>
					Total Amount
					<Price>₹{props.totalPrice}</Price>
				</TotalAmount>
				<Discount>
					You will save ₹{props.mrp - props.totalPrice} on this order
				</Discount>
			</Container>
		</Card>
		// <Card
		// 	headerLeft={"Price Details"}
		// 	style={{ maxWidth: "380px", margin: "0 10px" }}
		// >
		// 	<div
		// 		style={{
		// 			padding: "20px",
		// 			boxSizing: "border-box",
		// 		}}
		// 	>
		// 		<div className="flexRow sb" style={{ margin: "10px 0" }}>
		// 			<div>Price ({props.totalItem} items)</div>
		// 			<div>{props.totalPrice}</div>
		// 		</div>
		// 		<div className="flexRow sb" style={{ margin: "10px 0" }}>
		// 			<div>Delivery Charges</div>
		// 			<div>FREE</div>
		// 		</div>
		// 		<div className="flexRow sb" style={{ margin: "10px 0" }}>
		// 			<div>Total Amount</div>
		// 			<div>{props.totalPrice}</div>
		// 		</div>
		// 	</div>
		// </Card>
	);
};

export default PriceDetails;
