/** @format */

import { Button, Divider, Box, Typography, styled } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import {
	CustomLeftArrow,
	CustomRightArrow,
} from "../../../components/UI/Arrows";
import React, { useState, useEffect } from "react";
import { PriceReview } from "../../../components/UI/listProducts";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategory } from "../../../actions";
import { addEllipsis } from "../../../utils/addEllipsis";
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const Component = styled(Box)`
	margin-top: 10px;
	background: #ffffff;
	border-radius: 3px;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
		rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

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

const RenderTimer = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
}));

const MultiSlide = ({ data, timer, title }) => {
	const timerURL =
		"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

	const renderer = ({ hours, minutes, seconds }) => {
		return (
			<RenderTimer variant="span">
				{hours} : {minutes} : {seconds} Left
			</RenderTimer>
		);
	};

	return (
		<Component>
			<Deal>
				<DealText>{title}</DealText>
				{timer && (
					<Timer>
						<img src={timerURL} style={{ width: 24 }} alt="time clock" />
						<Countdown date={Date.now() + 5.04e7} renderer={renderer} />
					</Timer>
				)}
				<ViewAllButton variant="contained" color="primary">
					View All
				</ViewAllButton>
			</Deal>
			<Divider />
			<Carousel
				swipeable={false}
				draggable={false}
				responsive={responsive}
				centerMode={false}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={10000}
				keyBoardControl={true}
				showDots={false}
				customRightArrow={<CustomRightArrow />}
				customLeftArrow={<CustomLeftArrow />}
				containerClass="carousel-container"
				// removeArrowOnDeviceType={["tablet", "mobile"]}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				{data.map((product, index) => (
					<PriceReview
						url={`/${product.name}/${product._id}/page`}
						image={product.productPictures[0].img}
						title={addEllipsis(product.name)}
						price={product.price}
						mrp={product.maximumRetailPrice}
					/>
				))}
			</Carousel>
		</Component>
	);
};

const Slide = (props) => {
	return <>{props.multi === true && <MultiSlide {...props} />}</>;
};

export default Slide;
