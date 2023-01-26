/** @format */

import React, { Component, useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import { useLocation } from "react-router-dom";
import "./ProductStore.css";
import Carousel from "react-multi-carousel";
import {
	CustomLeftArrow,
	CustomRightArrow,
} from "../../../components/UI/Arrows";
import { Divider, Box, styled, Typography } from "@mui/material";
import { CarouselHeading } from "../../../components/UI/listProducts";
import { PriceReview } from "../../../components/UI/listProducts";

export default function ProductStore() {
	const product = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const location = useLocation();
	const priceRange = product.priceRange;
	const slug = location.pathname.split("/")[1];

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
		margin: 20px;
		background: #ffffff;
		border-radius: 3px;
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
			rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	`;
	useEffect(() => {
		dispatch(getProductsBySlug(slug));
	}, []);
	return (
		<div style={{ background: "#f1f3f6", marginTop: "10px" }}>
			{!product.priceRange
				? null
				: Object.keys(product.priceRange).map((key, index) => {
						return (
							<Component>
								<CarouselHeading
									title={
										slug.split("-")[0] +
										" Best Mobile Under ₹" +
										priceRange[key]
									}
								/>
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
									{product.productsByPrice[key].map((product) => (
										<PriceReview
											url={`/${product.name}/${product._id}/page`}
											image={product.productPictures[0].img}
											title={product.name}
											price={product.price}
											mrp={product.maximumRetailPrice}
										/>
									))}
								</Carousel>
							</Component>
						);
				  })}
		</div>
	);
}
