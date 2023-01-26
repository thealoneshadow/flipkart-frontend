/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { talktoChatGPT } from "../../actions";
import "./ChatBoxModal.css";

export default function ChatBoxModal(props) {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();
	const data = useSelector((state) => state.ai);
	console.log(data);
	const handleQuery = () => {
		const result = dispatch(talktoChatGPT(query));
		setQuery("");
		console.log(result);
	};
	return (
		<div className="modal-main">
			<a href="#modal-opened" className="link-1" id="modal-closed">
				Product Queries?
			</a>

			<div className="modal-container" id="modal-opened">
				<div className="modal">
					{/* <img class="modal-image" src="./flipkart-logo.png" /> */}
					<div className="modal__details">
						<h1 className="modal__title">Hey I am Flipkart's AI!</h1>
						<p className="modal__description">
							Ask your product related query with me, I will be happy to answer
						</p>
					</div>

					<p className="modal__text">{data.response ? data.response : null}</p>

					<button className="modal__btn" onClick={handleQuery}>
						{" "}
						&rarr;
					</button>
					<input
						type="text"
						className="modal__input"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onKeyPress={(e) => e.key === "Enter" && handleQuery()}
						placeholder="Enter your query here"
					/>

					<a href="#modal-closed" className="link-2"></a>
				</div>
			</div>
		</div>
	);
}
