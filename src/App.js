/** @format */

import "./App.css";
import HomePage from "./container/HomePage/HomePage";
import {
	BrowserRouter as Router,
	Route,
	Routes as Switch,
} from "react-router-dom";
import ProductList from "./container/ProductListPage/ProductListPage";
import { useEffect } from "react";
import { isUserLoggedIn, updateCart } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsPage from "./container/ProductDetailsPage/ProductDetailsPage";
import CartPage from "./container/CartPage/CartPage";
import CheckoutPage from "./container/CheckoutPage/CheckoutPage";
import OrderPage from "./container/OrderPage/OrderPage";
import OrderDetailsPage from "./container/OrderDetailsPage/OrderDetailsPage";
import {
	getProductsByCategory,
	getProductsBySlug,
} from "./actions/product.action";
import NotFound from "./container/NotFound/NotFound";
function App() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLoggedIn());
		}
	}, [auth.authenticate]);
	useEffect(() => {
		dispatch(updateCart());
	}, [auth.authenticate]);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="/account/orders" element={<OrderPage />} />
					<Route
						path="/order_details/:orderId"
						element={<OrderDetailsPage />}
					/>
					<Route
						path="/:productSlug/:productId/page"
						element={<ProductDetailsPage />}
					/>
					<Route path="/:slug" element={<ProductList />} />
					<Route path="/*" element={<NotFound />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
