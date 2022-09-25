import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";

export default function TeamComponent() {
	return (
		<div className="mb-5">
			<Container>
				<h1 className="text-center text-capitalize mt-5">
					the best way to learn and grow is to build
				</h1>
				<p className="text-center mt-2">
					Other 1000 developer help each other grow through one on one
					mentoring in <br /> technology such
					Javascrept,Python,React,SQL and more
				</p>
				<div class="d-flex justify-content-center mt-5">
					<button
						type="button"
						class="btn buttonColor btn-primary btn-lg text-light"
					>
						Get Started
					</button>
				</div>
				<div className="mt-5">
					<Row className="hide-sm">
						<Col xs="6" lg="6">
							<div className="ms-2">
								<Image
									src={dev1}
									width={110}
									className="customRounded "
								/>
							</div>
						</Col>
						<Col xs="6" lg="6">
							<div>
								<Image src={dev2} width={110} roundedCircle />
							</div>
						</Col>
					</Row>

					<Row className="mt-5">
						<Col xs="6" lg="6">
							<div className="d-flex justify-content-end">
								<Image
									src={dev1}
									width={110}
									className="customRounded "
								/>
							</div>
						</Col>
						<Col xs="6" lg="2" className="ms-auto">
							<div>
								<Image src={dev2} width={110} roundedCircle />
							</div>
						</Col>
					</Row>

					<Row className="mt-5">
						<Col xs="6" lg="5">
							<div className="d-flex justify-content-end">
								<Image
									src={dev1}
									width={110}
									className="customRounded "
								/>
							</div>
						</Col>
						<Col xs="6" lg="5" className="ms-auto">
							<div>
								<Image src={dev2} width={110} roundedCircle />
							</div>
						</Col>
					</Row>

					<Row className="hide-sm">
						<Col xs="6" lg="5">
							<div className="d-flex justify-content-start">
								<Image
									src={dev1}
									width={150}
									className="customRounded "
								/>
							</div>
						</Col>
						<Col xs="6" lg="5" className="ms-auto">
							<div className="d-flex justify-content-end">
								<Image src={dev2} width={150} roundedCircle />
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}
