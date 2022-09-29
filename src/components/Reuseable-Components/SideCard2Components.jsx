import React from "react";
import "./SideCardComponents.css";
import { Image } from "react-bootstrap";

export default function SideCard2Components({ image, footerTitle, icons }) {
	return (
		<div className="card-bg1">
			<div className="d-flex">
				<div className="small-screen1">
					<Image className="card-image" src={image} width={343} />
					<div class="Frame-30">
						<span class="viewlayercornerRadius-16">
							{footerTitle}
						</span>
					</div>
					<div class="Frame-31">
						{icons.map((a) => {
							return <i className={`bx ${a} bx-md`} />;
						})}
					</div>
				</div>
				<div className="Vector-17"></div>
			</div>
		</div>
	);
}
