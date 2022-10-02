import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../assets/singlelogo.jpeg";

export default function FooterComponent() {
	return (
		<footer className="main-footer pt-5">
			<Container>
				<Row>
					<Col lg={6}>
						<div>
							<Image src={logo} width={30} />
							eacamp
							<p className="mt-3">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Natus veniam ullam pariatur
								molestiae eius placeat nobis perspiciatis rem
								fugit architecto, accusamus mollitia consectetur
								at a facere fuga labore, facilis eveniet!
							</p>
						</div>
					</Col>
					<Col lg={2}>
						<div className="mb-5">
							<p>Project</p>
							<p>Javascript Project</p>
							<p>Python Project</p>
							<p>React Project</p>
							<p>React Native Project</p>
							<p>Node Project</p>
							<p>Angular Project</p>
						</div>
					</Col>
					<Col lg={2}>
						<div className="mb-5">
							<p>Product</p>
							<p>Javascript Product</p>
							<p>Python Product</p>
							<p>React Product</p>
							<p>React Native Product</p>
							<p>Node Product</p>
							<p>Angular Product</p>
						</div>
					</Col>
					<Col lg={2}>
						<div className="mb-5">
							<p>Resources</p>
							<p>Find members</p>
							<p>Find Mentors</p>
							<p>Contact Us</p>
							<p>Help center</p>
							<p>Support</p>
						</div>
					</Col>
				</Row>
				<hr />
				<div className="text-center">
					<p>&copy; 2022 Beacamp. All right reserve</p>
				</div>
			</Container>
		</footer>
	);
}
