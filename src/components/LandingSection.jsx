import React from "react";
import LandingComponent from "./LandingComponet";
import NavbarComponent from "./navba/NavbarComponent";
import ExperienceComponent from "./ExperienceComponent";
import AttractComponent from "./AtttractComponent";
import ImproveComponent from "./ImproveComponent";
import FounderComponent from "./FounderComponent";
import ProjectComponent from "./ProjectComponent";
import TeamComponent from "./TeamComponent";
import FooterComponent from "./FooterComponent";

export default function LandingSection() {
	return (
		<>
			<NavbarComponent />
			<LandingComponent />
			<ExperienceComponent />
			<ImproveComponent />
			<AttractComponent />
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
