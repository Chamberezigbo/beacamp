import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Reuseable-Components/SideCardComponents";
import SideCardComponents from "./Reuseable-Components/SideCardComponents";
import SideTextComponents from "./Reuseable-Components/SideTextComponents";

export default function AttractComponent({
	title,
	subTitle,
	image,
	footerTitle,
	icons,
	bg,
}) {
	return (
		<Container fluid className="spacing">
			<Row>
				<Col sm={6} className="ms-lg-auto">
					<SideCardComponents
						image={image}
						footerTitle={footerTitle}
						icons={icons}
						bg={bg}
					/>
				</Col>
				<Col sm={5} className="pt-5">
					<SideTextComponents title={title} subTitle={subTitle} />
				</Col>
			</Row>
		</Container>
	);
}
