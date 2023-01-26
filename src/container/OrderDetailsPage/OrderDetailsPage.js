/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../actions";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/UI/Card/Card";
import Price from "../../components/UI/Price";
import { useParams } from "react-router-dom";
import "./OrderDetailsPage.css";
import { addEllipsis } from "../../utils/addEllipsis";

/**
 * @author theAloneshadow(Divyanshu Goyal)
 * @function OrderDetails
 **/

const OrderDetailsPage = (props) => {
	const dispatch = useDispatch();
	const orderDetails = useSelector((state) => state.user.orderDetails);
	console.log(orderDetails);
	const params = useParams();
	useEffect(() => {
		const payload = {
			orderId: params.orderId,
		};
		dispatch(getOrder(payload));
	}, []);

	const formatDate = (date) => {
		if (date) {
			const d = new Date(date);
			return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
		}
		return "";
	};

	const formatDate2 = (date) => {
		const month = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"June",
			"July",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		if (date) {
			const d = new Date(date);
			return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
		}
	};

	if (!(orderDetails && orderDetails.address)) {
		return null;
	}

	return (
		<Layout style={{ margin: "10px !important" }}>
			<div
				style={{
					width: "1160px",
					margin: "10px auto",
					minHeight: "50vh",
				}}
			>
				<Card
					style={{
						margin: "10px 0",
					}}
					className="orderDetails"
				>
					<div className="delAdrContainer">
						<div className="delAdrDetails">
							<div className="delTitle">Delivery Address</div>
							<div className="delName">{orderDetails.address.name}</div>
							<div className="delAddress">{`${orderDetails.address.address} ${orderDetails.address.landmark} ${orderDetails.address.locality}, ${orderDetails.address.cityDistrictTown}-${orderDetails.address.pinCode},${orderDetails.address.state}`}</div>
							<div className="delPhoneNumber">
								{`Phone number   ` + `${orderDetails.address.mobileNumber}`}
							</div>
						</div>
						{/* <div className="delMoreActionContainer">
							<div className="delTitle">More Actions</div>
							<div className="delName">Download Invoice</div>
						</div> */}
					</div>
				</Card>

				{orderDetails.items.map((item, index) => (
					<Card
						className="orderDetails"
						style={{ marginBottom: "10px", display: "inline-flex" }}
					>
						<div className="flexRow">
							<div className="delItemImgContainer">
								<img src={item.productId.productPictures[0].img} alt="" />
							</div>
							<div style={{ width: "250px", marginLeft: "-65px" }}>
								<div className="delItemName">
									{addEllipsis(item.productId.name)}
								</div>
								<Price value={item.payablePrice} />
							</div>
						</div>
						<div
							style={{
								padding: "25px 50px",
								marginTop: "6px",
								verticalAlign: "middle",
								fontSize: "24px",
							}}
						>
							<div className="orderTrack">
								{orderDetails.orderStatus.map((status) => (
									<div
										className={`orderStatus ${
											status.isCompleted ? "active" : ""
										}`}
									>
										<div
											className={`point ${status.isCompleted ? "active" : ""}`}
										></div>
										<div className="orderInfo">
											<div className="status">{status.type}</div>
											<div className="date">{formatDate2(status.date)}</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div style={{ fontWeight: "500", fontSize: "14px" }}>
							{orderDetails.orderStatus[3].isCompleted &&
								`Delivered on ${formatDate2(orderDetails.orderStatus[3].date)}`}
						</div>
					</Card>
				))}
			</div>
		</Layout>
	);
};

export default OrderDetailsPage;
