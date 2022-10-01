import React from "react";
import LandingComponent from "./LandingComponet";
import NavbarComponent from "../navba/NavbarComponent";
import ExperienceComponent from "../ExperienceComponent";
import AttractComponent from "../AtttractComponent";
import ImproveComponent from "../ImproveComponent";
import FounderComponent from "../FounderComponent";
import ProjectComponent from "../ProjectComponent";
import TeamComponent from "../TeamComponent";
import FooterComponent from "../FooterComponent";

// images //
import codeImage from "../../assets/Code.svg";
import codeImage2 from "../../assets/Frame 2-2.svg";

export default function LandingSection() {
	return (
		<>
			<NavbarComponent />
			<LandingComponent />
			<ExperienceComponent
				title="Get hands-on experience with usable projects"
				subTitle="
                         Become fit for paid work through learn by building model.
					practice,improve and apply skill through full-featured
					technical projects with the help of and mentors and peers.
                    "
				image={codeImage}
				footerTitle="view.layer.cornerRadius = 16"
				icons={["bxl-python", "bxl-react", "bxl-php", "bxl-nodejs"]}
			/>
			<ImproveComponent
				title="Improve by sharing your code & getting feedback"
				subTitle="
                         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                         Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    "
				image={codeImage2}
				footerTitle="<clip-pathandroid:pathData='20 0Z'
                    />"
				icons={[
					"bxl-php",
					"bxl-vuejs",
					"bx-code-alt",
					"bxl-typescript",
				]}
			/>
			<AttractComponent
				title="Get hands-on experience with usable projects"
				subTitle="
                         Become fit for paid work through learn by building model.
					practice,improve and apply skill through full-featured
					technical projects with the help of and mentors and peers.
                    "
				image={codeImage}
				footerTitle="view.layer.cornerRadius = 16"
				icons={["bxl-typescript", "bxl-php", "bxl-nodejs", "bxl-react"]}
				bg={true}
			/>
			<FounderComponent />
			<ProjectComponent
				title="web development project"
				color="webStyle"
			/>
			<ProjectComponent
				title="cloud development project"
				color="cloudStyle"
			/>
			<ProjectComponent
				title="mobile development project"
				color="mobileStyle"
			/>
			<TeamComponent />
			<FooterComponent />
		</>
	);
}
