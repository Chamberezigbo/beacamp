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
		<Container fluid className="spacing">
			<div className="pt-5 mt-5">
				<Row>
					<Col sm={6} className="ms-lg-auto">
						<SideCardComponents
							image={image}
							footerTitle={footerTitle}
							icons={icons}
						/>
					</Col>
					<Col sm={5} className="pt-5">
						<SideTextComponents title={title} subTitle={subTitle} />
					</Col>
				</Row>
			</div>
		</Container>
	);
}
