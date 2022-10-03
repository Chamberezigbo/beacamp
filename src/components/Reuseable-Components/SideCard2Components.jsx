import React from "react";
import "./SideCardComponents.css";
import { Image, Card } from "react-bootstrap";

export default function SideCard2Components({ image, footerTitle, icons }) {
	return (
		<Card className="card-bg1">
			<Card.Body>
				<div className="d-flex justify-content-between">
					<div className="small-screen1">
						<Image className="card-image" src={image} width={343} />
						<div className="Frame-30">
							<span className="viewlayercornerRadius-16 text-danger">
								{footerTitle}
							</span>
						</div>
						<div className="Frame-31">
							{icons.map((a) => {
								return (
									<i className={`bx ${a} bx-md`} key={a} />
								);
							})}
						</div>
					</div>
					<div>
						<div className="Vector-17"></div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
