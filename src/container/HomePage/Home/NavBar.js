/** @format */

import { Typography, Box, styled } from "@mui/material";

import { navData } from "../DummyData";

const Component = styled(Box)(({ theme }) => ({
	display: "flex",
	background: "#ffffff",
	justifyContent: "space-between",
	margin: "0px 130px 0 130px !important",
	overflowX: "overlay",
	[theme.breakpoints.down("lg")]: {
		margin: "0px !important",
	},
}));

const Container = styled(Box)`
	padding: 12px 8px;
	text-align: center;
`;

const Text = styled(Typography)`
	font-size: 14px;
	font-weight: 600;
	font-family: inherit;
`;

const NavBar = () => {
	return (
		<Component>
			{navData.map((temp) => (
				<Container>
					<img src={temp.url} style={{ width: 64 }} />
					<Text>{temp.text}</Text>
				</Container>
			))}
		</Component>
	);
};

export default NavBar;
