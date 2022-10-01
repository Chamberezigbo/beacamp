//! Used app.css for the style //
import React from "react";
import { Card, Container, Image, Row, Col } from "react-bootstrap";
import profileImage from "../assets/Trust Headshot pPNG.png";
export default function FounderComponent() {
	return (
		<div className="experience">
			<Container className="pt-5 pb-5">
				<Card className="bg-dark text-white border rounded-3 h-custom p-5">
					<Card.Body>
						<Row>
							<Col xs={12} lg={2} md={2} className="profileImage">
								<Image
									src={profileImage}
									width={100}
									roundedCircle
								/>
								<p>
									Trust Onyekwere <br />
									<span>Founder, Beacamp</span>
								</p>
							</Col>
							<Col xs={12} md={8} lg={8}>
								<Card.Text className="cardText">
									<h2>
										"Our mission us to help developers turn
										their dreams of employment and career
										success into reality"
									</h2>
								</Card.Text>
							</Col>
						</Row>
					</Card.Body>
				</Card>
				<h1 className="text-center text-capitalize mt-5 centered-h1">
					find project
				</h1>
			</Container>
		</div>
	);
}
