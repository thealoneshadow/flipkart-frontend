/** @format */

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProductPage } from "../../../actions";
import { useSelector, useDispatch } from "react-redux";
import getParams from "../../../utils/getParams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../../../components/UI/Card/Card";

export default function ProductPage() {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);
	console.log(product);

	const { page } = product;
	const location = useLocation();
	useEffect(() => {
		const params = getParams(location.search);
		const payload = {
			params,
		};
		dispatch(getProductPage(payload));
	}, []);

	return (
		<div style={{ margin: "0 10px", minHeight: "50vh" }}>
			<h3>{page.title}</h3>
			<Carousel renderThumbs={() => {}}>
				{page.banners &&
					page.banners.map((banner, index) => (
						<a
							key={index}
							style={{ display: "block" }}
							href={banner.navigateTo}
						>
							<img src={banner.img} alt="" />
						</a>
					))}
			</Carousel>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					margin: "10px 0",
				}}
			>
				{page.products &&
					page.products.map((product, index) => (
						<Card
							key={index}
							style={{ width: "400px", height: "200px", margin: "5px" }}
						>
							<img
								style={{ width: "100%", height: "100%" }}
								src={product.img}
								alt=""
							/>
						</Card>
					))}
			</div>
		</div>
	);
}
