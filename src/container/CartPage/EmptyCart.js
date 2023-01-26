/** @format */

import React from "react";
import { Typography, Box, styled } from "@mui/material";
import { MaterialButton } from "../../components/MaterialUI/MaterialUI";
import { useNavigate } from "react-router-dom";
export default function EmptyCart() {
	const navigate = useNavigate();
	const Component = styled(Box)`
		width: 80%%;
		height: 65vh;
		background: #fff;
		margin: 80px 140px;
	`;

	const Container = styled(Box)`
		text-align: center;
		padding-top: 70px;
	`;

	const Image = styled("img")({
		width: "15%",
	});

	const imgurl =
		"https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

	return (
		<Component>
			<Container style={{ minHeight: "50vh" }}>
				<Image src={imgurl} />
				<Typography>Your cart is empty!</Typography>
				<Typography component="span" style={{ fontSize: "12px" }}>
					Add items to it now.
				</Typography>
				<Typography component="span">
					<MaterialButton
						title="Shop now"
						bgColor="#2874f0"
						textColor="#ffffff"
						style={{
							marginLeft: "5px",
							maxWidth: "200px",
							margin: "auto",
							marginTop: "10px",
						}}
						onClick={() => {
							navigate(`/`);
						}}
					/>
				</Typography>
			</Container>
		</Component>
	);
}
