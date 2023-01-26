/** @format */

import React from "react";
import Layout from "../../components/Layout/Layout";
import "./ProductListPage.css";
import { useLocation } from "react-router-dom";
import ProductStore from "./ProductStore/ProductStore";
import getParams from "../../utils/getParams";
import ProductPage from "./ProductPage/ProductPage";
import ClothingAndAccessories from "./ClothingAndAccessories/ClothingAndAccessories";

export default function ProductListPage(props) {
	const location = useLocation();
	const renderProduct = () => {
		const params = getParams(location.search);
		let content = null;
		switch (params.type) {
			case "store":
				content = <ProductStore {...props} />;
				break;
			case "page":
				content = <ProductPage {...props} />;
				break;
			default:
				content = <ClothingAndAccessories {...props} />;
		}
		return content;
	};
	return <Layout>{renderProduct()}</Layout>;
}
