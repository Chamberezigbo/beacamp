import React from "react";
import { Image } from "react-bootstrap";

export default function SideCardComponents({ image, footerTitle, icons, bg }) {
	return (
		<div className={bg ? "card-bg2" : "card-bg"}>
			<div className="d-flex">
				<div className="Vector-16"></div>
				<div className="small-screen">
					<Image className="card-image" src={image} width={343} />
					<div class="Frame-29">
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
			</div>
		</div>
	);
}
