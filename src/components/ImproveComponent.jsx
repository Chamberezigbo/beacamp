import { Container, Row, Col, Image, Button } from "react-bootstrap";

import "./Reuseable-Components/SideCardComponents";
import SideCard2Components from "./Reuseable-Components/SideCard2Components";
import SideTextComponents from "./Reuseable-Components/SideTextComponents";

export default function ImproveComponent({
	title,
	subTitle,
	image,
	footerTitle,
	icons,
}) {
	return (
		<Container className="spacing">
			<Row>
				<Col sm={12} lg={6} md={12} className="pt-5">
					<SideTextComponents title={title} subTitle={subTitle} />
				</Col>
				<Col sm={12} lg={6} md={12} className="ms-lg-auto">
					<SideCard2Components
						image={image}
						footerTitle={footerTitle}
						icons={icons}
					/>
				</Col>
			</Row>
		</Container>
	);
}

//! create new SideTextComponents for improveComponent components // 