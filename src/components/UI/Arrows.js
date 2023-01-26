/** @format */

import React from "react";
import { Button, styled } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
/**
 * @author theAloneshadow(Divyanshu Goyal)
 * @function Cart
 **/

const CarouselArrowButtonRight = styled(Button)`
	right: 0;
	justify-content: space-around;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
	position: absolute;
	top: calc(50% - 52px);
	min-width: 47px;
	height: 104px;
	background-color: hsla(0, 0%, 100%, 0.98);
	box-shadow: 0 1px 5px 0 rgb(0 0 0 / 11%);
	transition: opacity 0.9s ease-in;
`;
const CarouselArrowButtonLeft = styled(Button)`
	left: 0;
	justify-content: space-around;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
	position: absolute;
	top: calc(50% - 52px);
	min-width: 47px;
	height: 104px;
	background-color: hsla(0, 0%, 100%, 0.98);
	box-shadow: 0 1px 5px 0 rgb(0 0 0 / 11%);
	transition: opacity 0.9s ease-in;
`;

const CustomRightArrow = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType },
	} = rest;
	// onMove means if dragging or swiping in progress.
	return (
		<CarouselArrowButtonRight onClick={() => onClick()}>
			<ArrowForward style={{ color: "black" }} />
		</CarouselArrowButtonRight>
	);
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType },
	} = rest;
	// onMove means if dragging or swiping in progress.
	return (
		<CarouselArrowButtonLeft
			style={{ color: "black" }}
			onClick={() => onClick()}
		>
			<ArrowBack />
		</CarouselArrowButtonLeft>
	);
};

export { CustomLeftArrow, CustomRightArrow };
