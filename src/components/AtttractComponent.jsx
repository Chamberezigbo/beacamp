import React from "react";
import sideImage from "../assets/4653742 1.svg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function AttractComponent() {
	return (
		<div className="experience pb-5">
			<Container className="pt-5">
				<Row>
					<Col sm={4} className="me-lg-auto">
						<Image src={sideImage} thumbnail width={370} />
					</Col>
					<Col sm={6} className="pt-5">
						<h1>Attract the job you desire, 3x your salary</h1>
						<p className="pt-4 subtitle">
							Become fit for paid work through learn by building
							model. practice,improve and apply skill through
							full-featured technical projects with the help of
							and mentors and peers.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
