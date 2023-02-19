/** @format */

import "./App.css";
function App() {

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
