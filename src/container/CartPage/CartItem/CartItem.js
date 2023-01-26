/** @format */

import React, { useState } from "react";
import "./CartItem.css";

import { Card, Box, Typography, Button, styled } from "@mui/material";
import { addEllipsis } from "../../../utils/addEllipsis";
/**
 * @author theAloneshadow(Divyanshu Goyal)
 * @function CartItem
 **/

const Component = styled(Card)`
	border-top: 1px solid #f0f0f0;
	border-radius: 0px;
	display: flex;
`;

const LeftComponent = styled(Box)`
	margin: 20px;
	display: flex;
	flex-direction: column;
`;

const SmallText = styled(Typography)`
	color: #878787;
	font-size: 14px;
	margin-top: 10px;
`;

const Cost = styled(Typography)`
	font-size: 18px;
	font-weight: 600;
`;

const MRP = styled(Typography)`
	color: #878787;
`;

const Discount = styled(Typography)`
	color: #388e3c;
`;

const Remove = styled(Button)`
	margin-top: 20px;
	font-size: 16px;
`;

const CartItem = (props) => {
	const [qty, setQty] = useState(props.cartItem.qty);

	const { _id, name, price, maximumRetailPrice, img } = props.cartItem;

	const onQuantityIncrement = () => {
		setQty(qty + 1);
		props.onQuantityInc(_id, qty + 1);
	};

	const onQuantityDecrement = () => {
		if (qty <= 1) return;
		setQty(qty - 1);
		props.onQuantityDec(_id, qty - 1);
	};
	const showDiscount = (price, mrp) => {
		return Math.round((1 - price / mrp) * 100);
	};

	return (
		<Component>
			<LeftComponent>
				<img src={img} style={{ height: 110, width: 110 }} />
			</LeftComponent>
			<Box style={{ margin: 20 }}>
				<Typography>{name}</Typography>
				<SmallText>
					Seller:RetailNet
					<span>
						<img
							height="21"
							src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
							style={{ verticalAlign: "middle", marginLeft: "6px" }}
						/>
					</span>
				</SmallText>
				<Typography style={{ margin: "20px 0" }}>
					<Cost component="span">₹{price}</Cost>&nbsp;&nbsp;&nbsp;
					<MRP component="span">
						<strike>₹{maximumRetailPrice}</strike>
					</MRP>
					&nbsp;&nbsp;&nbsp;
					<Discount component="span">
						{showDiscount(price, maximumRetailPrice)}% off
					</Discount>
				</Typography>
				<div
					style={{
						display: "flex",
						marginLeft: "-160px",
					}}
				>
					{/* quantity control */}
					<div className="quantityControl">
						<button onClick={onQuantityDecrement}>-</button>
						<input value={qty} readOnly />
						<button onClick={onQuantityIncrement}>+</button>
					</div>
					<button className="cartActionBtn">save for later</button>
					<button
						className="cartActionBtn"
						onClick={() => props.onRemoveCartItem(_id)}
					>
						Remove
					</button>
				</div>
			</Box>
		</Component>
		// <div className="cartItemContainer">
		// 	<div className="flexRow">
		// 		<div className="cartProImgContainer">
		// 			<img src={img} alt={""} />
		// 		</div>
		// 		<div className="cartItemDetails">
		// 			<div>
		// 				<p>{name}</p>
		// 				<p>Rs. {price}</p>
		// 			</div>
		// 			<div>Delivery in 3 - 5 days</div>
		// 		</div>
		// 	</div>
		// 	<div
		// 		style={{
		// 			display: "flex",
		// 			margin: "5px 0",
		// 		}}
		// 	>
		// 		{/* quantity control */}
		// 		<div className="quantityControl">
		// 			<button onClick={onQuantityDecrement}>-</button>
		// 			<input value={qty} readOnly />
		// 			<button onClick={onQuantityIncrement}>+</button>
		// 		</div>
		// 		<button className="cartActionBtn">save for later</button>
		// 		<button
		// 			className="cartActionBtn"
		// 			onClick={() => props.onRemoveCartItem(_id)}
		// 		>
		// 			Remove
		// 		</button>
		// 	</div>
		// </div>
	);
};

export default CartItem;
