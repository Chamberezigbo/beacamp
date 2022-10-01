import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectComponentCards from "./Reuseable-Components/ProjectComponentCards";
import "./ProjectComponent.css";

export default function WebComponent({ title, color }) {
	return (
		<section className={color}>
			<Container className="pt-5">
				<h1 className="development-Projects text-capitalize mb-5">
					{title}
				</h1>
				<Row>
					<Col lg={4}>
						<ProjectComponentCards />
					</Col>
					<Col lg={4}>
						<ProjectComponentCards />
					</Col>
					<Col lg={4}>
						<ProjectComponentCards />
					</Col>
				</Row>
			</Container>
		</section>
	);
}
