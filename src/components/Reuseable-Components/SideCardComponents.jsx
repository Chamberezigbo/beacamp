import React from "react";
import { Image, Card } from "react-bootstrap";

export default function SideCardComponents({ image, footerTitle, icons, bg }) {
	return (
		<Card className={bg ? "card-bg2" : "card-bg"}>
			<Card.Body>
				<div className="d-flex">
					<div className="d-flex justify-content-start">
						<div className="Vector-16"></div>
					</div>
					<div className="d-flex justify-content-center">
						<div className="small-screen">
							<Image
								className="card-image"
								src={image}
								width={343}
							/>
							<div className="Frame-29">
								<span className="viewlayercornerRadius-16">
									{footerTitle}
								</span>
							</div>
							<div className="Frame-31">
								{icons.map((a) => {
									return (
										<i
											className={`bx ${a} bx-md`}
											key={a}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
