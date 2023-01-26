/** @format */

import React from "react";
import "./Footer.css";
import Card from "../UI/Card/Card";

export default function Footer() {
	return (
		<div>
			<Card className="footerBody">
				<Card className="footerMain row">
					<div className="footerMainSub">
						<div className="footerContent">ABOUT</div>
						<a
							href="/helpcentre/otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							Contact Us
						</a>
						<a
							href="/about-us/otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							About Us
						</a>
						<a
							href="https://www.flipkartcareers.com/?otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							Careers
						</a>
						<a
							href="http://stories.flipkart.com/?otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							Flipkart Stories
						</a>
						<a
							href="/s/press?otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							Press
						</a>
						<a
							href="https://www.flipkartwholesale.com/?otracker=undefined_footer_navlinks"
							target="_blank"
							className="footerLink"
							rel="noopener noreferrer"
						>
							Flipkart Wholesale
						</a>
						<a href="/corporate/information" className="footerLink">
							Corporate Information
						</a>
					</div>
					<div className="footerMainSub">
						<div className="footerContent">HELP</div>
						<a href="/pages/payments" className="footerLink">
							Payments
						</a>
						<a href="/pages/shipping" className="footerLink">
							Shipping
						</a>
						<a
							href="/helpcentre/catalog=55c9c6edb000002e002c1701&amp;view=CATALOG"
							className="footerLink"
						>
							Cancellation &amp; Returns
						</a>
						<a
							href="/helpcentre/catalog=55c9c8e2b0000023002c1702&amp;view=CATALOG"
							className="footerLink"
						>
							FAQ
						</a>
						<a
							href="https://seller.flipkart.com/fiv?otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							Report Infringement
						</a>
					</div>
					<div className="footerMainSub">
						<div className="footerContent">POLICY</div>
						<a
							href="/pages/returnpolicy?otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							Return Policy
						</a>
						<a
							href="/pages/terms?otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							Terms Of Use
						</a>
						<a
							href="/pages/paymentsecurity?otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							Security
						</a>
						<a
							href="/pages/privacypolicy?otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							Privacy
						</a>
						<a href="/sitemap/otracker" className="footerLink">
							Sitemap
						</a>
						<a
							href="/pages/ewaste-compliance-tnc?otracker=undefined_footer_navlinks"
							className="footerLink"
						>
							EPR Compliance
						</a>
					</div>
					<div className="footerMainSub">
						<div className="footerContent">SOCIAL</div>
						<a href="https://www.facebook.com/flipkart" className="footerLink">
							Facebook
						</a>
						<a href="https://www.twitter.com/flipkart" className="footerLink">
							Twitter
						</a>
						<a href="https://www.youtube.com/flipkart" className="footerLink">
							YouTube
						</a>
					</div>
					<div className="footerMainSub address">
						<div className="footerMailUs">
							<div className="footerContent">
								<span>Mail Us:</span>
							</div>
							<div className="footerAddress">
								<div className="footerAddressSub">
									<div className="footerAddressContent footerAddress">
										<p>Flipkart Internet Private Limited, </p>
										<p> Buildings Alyssa, Begonia &amp; </p>
										<p> Clove Embassy Tech Village, </p>
										<p> Outer Ring Road, Devarabeesanahalli Village, </p>
										<p> Bengaluru, 560103, </p>
										<p> Karnataka, India</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footerMainSub address">
						<div style={{ marginBottom: "10px", paddingLeft: "14px" }}>
							<div className="footerContent">
								<span>Registered Office Address:</span>
							</div>
							<div className="footerAddress">
								<div className="footerAddressSub">
									<div className="footerAddressContent footerAddress">
										<p>Flipkart Internet Private Limited, </p>
										<p> Buildings Alyssa, Begonia &amp; </p>
										<p> Clove Embassy Tech Village, </p>
										<p> Outer Ring Road, Devarabeesanahalli Village, </p>
										<p> Bengaluru, 560103, </p>
										<p> Karnataka, India </p>
										<p> CIN : U51109KA2012PTC066107 </p>
										<p>
											{" "}
											Telephone: <a href="tel:18002029898">044-45614700</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Card>
			<div className="footerBody">
				<div className="footerBottom">
					<div>
						<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K" />
						<a href="https://seller.flipkart.com/?utm_source=fkwebsite&amp;utm_medium=websitedirect">
							<span className="footerBottomSub">Become a Seller</span>
						</a>
					</div>
					<div>
						<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
						<a href="https://brands.flipkart.com">
							<span className="footerBottomSub">Advertise</span>
						</a>
					</div>
					<div>
						<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
						<a href="/the-gift/card-store/">
							<span className="footerBottomSub">Gift Cards</span>
						</a>
					</div>
					<div>
						<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
						<a href="/help/center">
							<span className="footerBottomSub">Help Center</span>
						</a>
					</div>
					<span style={{ color: "#fff" }}>
						© 2007-2023 <span>Flipkart.com</span>
					</span>
					<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" />
				</div>
			</div>
		</div>
	);
}
