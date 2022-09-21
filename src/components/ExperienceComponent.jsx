import sideImage from "../assets/4653742 1.svg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function ExperienceComponent() {
	return (
		<div className="experience mt-5 pb-5">
			<Container className="pt-5">
				<Row>
					<Col sm={6} className="ms-lg-auto">
						<Image src={sideImage} thumbnail width={370} />
					</Col>
					<Col sm={6} className="pt-5">
						<h1>Get hands-on experience with usable projects</h1>
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
