import "./Reuseable-Components/SideCardComponents";
import { Row, Col, Container } from "react-bootstrap";
import SideCardComponents from "./Reuseable-Components/SideCardComponents";
import SideTextComponents from "./Reuseable-Components/SideTextComponents";

export default function ExperienceComponent({
	title,
	subTitle,
	image,
	footerTitle,
	icons,
}) {
	return (
		<div className="pt-5 mt-5">
			<Container className="spacing">
				<Row>
					<Col sm={12} lg={6} md={12} className="ms-lg-auto">
						<SideCardComponents
							image={image}
							footerTitle={footerTitle}
							icons={icons}
						/>
					</Col>
					<Col sm={12} lg={6} md={12} className="pt-5">
						<SideTextComponents title={title} subTitle={subTitle} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
