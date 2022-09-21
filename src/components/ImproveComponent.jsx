import sideImage from "../assets/4653742 1.svg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function ImproveComponent() {
	return (
		<div className="experience pb-5">
			<Container className="pt-5">
				<Row>
					<Col sm={6} className="pt-5">
						<h1>
							Improve by sharing your code and getting feedback
						</h1>
						<p className="pt-4 subtitle">
							Become fit for paid work through learn by building
							model. practice,improve and apply skill through
							full-featured technical projects with the help of
							and mentors and peers.
						</p>
					</Col>
					<Col sm={4} className="ms-lg-auto">
						<Image src={sideImage} thumbnail width={370} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
