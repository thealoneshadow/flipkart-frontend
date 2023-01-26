/** @format */

import React from "react";
import Layout from "../../components/Layout/Layout";
import { Typography, Box, styled } from "@mui/material";
import { MaterialButton } from "../../components/MaterialUI/MaterialUI";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
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
		"https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png";
	return (
		<Layout>
			<Component>
				<Container style={{ minHeight: "50vh" }}>
					<Image src={imgurl} />
					<Typography>
						Unfortunately the page you are looking for has been moved or
						deleted!
					</Typography>
					<Typography component="span">
						<MaterialButton
							title="Go to Homepage"
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
		</Layout>
	);
}
