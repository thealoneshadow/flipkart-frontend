/** @format */

import React from "react";
import { Button, Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
/**
 * @author theAloneshadow(Divyanshu Goyal)
 * @function Cart
 **/

const Deal = styled(Box)`
	display: flex;
	padding: 15px 20px;
`;

const DealText = styled(Typography)`
	font-size: 22px;
	font-weight: 600;
	line-height: 32px;
	margin-right: 25px;
`;

const Timer = styled(Box)`
	color: #7f7f7f;
	margin-left: 10px;
	display: flex;
	align-items: center;
`;

const ViewAllButton = styled(Button)`
	margin-left: auto;
	background-color: #2874f0;
	border-radius: 2px;
	font-size: 13px;
`;
const Image = styled("img")({
	width: "auto",
	height: 150,
});

const Text = styled(Typography)`
	font-size: 14px;
	margin-top: 5px;
`;
const CarouselHeading = (props) => {
	return (
		<Deal>
			<DealText>{props.title}</DealText>

			<ViewAllButton variant="contained" color="primary">
				View All
			</ViewAllButton>
		</Deal>
	);
};
const showDiscount = (price, mrp) => {
	return Math.round((1 - price / mrp) * 100);
};

const PriceReview = (props) => {
	return (
		<Link to={props.url} style={{ textDecoration: "none" }}>
			<Box textAlign="center" style={{ padding: "25px 15px" }}>
				<Image src={props.image} />
				<Text style={{ fontWeight: 600, color: "#212121" }}>{props.title}</Text>
				<div style={{ marginTop: ".5rem" }}>
					<span className="ratingCount">
						4.{Math.floor(Math.random() * 10)} <IoIosStar />
					</span>
					<span
						style={{
							fontSize: "14px",
							marginLeft: "5px",
							marginRight: "3px",
							color: "#878787",
							fontWeight: "500",
						}}
					>
						({Math.floor(Math.random() * 10000)})
					</span>
					<img
						height="21"
						src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
						style={{ verticalAlign: "middle", marginLeft: "6px" }}
					></img>
				</div>
				<Text style={{ color: "#212121", opacity: ".6" }}></Text>
				<span style={{ color: "black", fontWeight: "500" }}>
					₹{props.price}
				</span>
				&nbsp;&nbsp;&nbsp;
				<span style={{ color: "#878787" }}>
					<strike>₹{props.mrp}</strike>
				</span>
				&nbsp;&nbsp;&nbsp;
				<span style={{ color: "#388E3C", fontWeight: 500, fontSize: "14px" }}>
					{showDiscount(props.price, props.mrp)}% off
				</span>
			</Box>
		</Link>
	);
};

export { CarouselHeading, PriceReview };
