import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import frame1 from "../../assets/Frame 1.svg";
import frame2 from "../../assets/Frame 2.svg";

// css file //
import "./LandingComponent.css";

export default function LandingComponent() {
	return (
		<div className="landingSection pb-5">
			<Container className="pt-lg-5">
				<Row>
					<Col lg={7} sm="auto" className="pt-6">
						<h1 className="centered-h1">
							Build project to advance your career
						</h1>
						<p className="pt-4">
							Become fit for paid work through learn by building
							model. practice,improve and apply skill through
							full-featured technical projects with the help of
							and mentors and peers.
						</p>
						<div className="mt-5 d-grid w-50 btn-sm">
							<Button className="buttonColorMain" size="lg">
								Start Building Project
							</Button>
						</div>
					</Col>
					<Col lg={5} sm="12" className="ms-lg-auto">
						<div className="parent">
							<Image
								className="image1"
								src={frame1}
								width={351}
							/>
							<Image
								className="image2"
								src={frame2}
								width={294}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
