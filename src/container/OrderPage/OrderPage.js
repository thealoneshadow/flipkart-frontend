/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/UI/Card/Card";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import "./OrderPage.css";
import { Breed } from "../../components/MaterialUI/MaterialUI";
import { generatePublicUrl } from "../../urlConfig";

/**
 * @author theAloneshadow(Divyanshu Goyal)
 * @function OrderPage
 **/

const OrderPage = (props) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(getOrders());
	}, []);

	return (
		<Layout>
			<div
				style={{
					width: "1160px",
					margin: "10px auto",
					minHeight: "50vh",
				}}
			>
				<Breed
					breed={[
						{ name: "Home", href: "/" },
						{ name: "My Account", href: "/account" },
						{ name: "My Orders", href: "/account/orders" },
					]}
					breedIcon={<IoIosArrowForward />}
				/>
				{user.orders.map((order) => {
					return order.items.map((item) => (
						<Card
							style={{
								display: "inline-flex",
								margin: "5px 0 10px 0",
							}}
							className="orderDetails"
						>
							<Link
								to={`/order_details/${order._id}`}
								className="orderItemContainer"
							>
								<div className="orderImgContainer">
									<img
										className="orderImg"
										src={item.productId.productPictures[0].img}
									/>
								</div>
								<div className="orderRow">
									<div className="orderName">{item.productId.name}</div>
									<div className="orderPrice">
										<BiRupee />
										{item.payablePrice}
									</div>
									<div style={{ float: "right" }}>{order.paymentStatus}</div>
								</div>
							</Link>
						</Card>
					));
				})}
			</div>
		</Layout>
	);
};

export default OrderPage;
