import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import landingImage from "../assets/image 4.png";
import NavbarComponent from "./navba/NavbarComponent";
import ExperienceComponent from "./ExperienceComponent";
import AttractComponent from "./AtttractComponent";
import ImproveComponent from "./ImproveComponent";
import FounderComponent from "./FounderComponent";

export default function LandingSection() {
	return (
		<div className="mb-5">
			<NavbarComponent />
			<Container className="landingSection mt-lg-3 pt-lg-5">
				<Row>
					<Col sm={6} className="pt-5">
						<h1>Build project to advance your career</h1>
						<p className="pt-4">
							Become fit for paid work through learn by building
							model. practice,improve and apply skill through
							full-featured technical projects with the help of
							and mentors and peers.
						</p>
						<div className="d-grid w-75 mb-4">
							<Button className="buttonColor" size="lg">
								Start Building Project
							</Button>
						</div>
					</Col>
					<Col sm={5} className="ms-lg-auto">
						<Image src={landingImage} thumbnail width={370} />
					</Col>
				</Row>
			</Container>
			<ExperienceComponent />
			<ImproveComponent />
			<AttractComponent />
			<FounderComponent />
		</div>
	);
}
