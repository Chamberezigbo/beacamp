// ? using App.css style //

import React from "react";
import { Container, Button } from "react-bootstrap";
import dev1 from "../assets/pexels-lucien-haba-5701925.jpg";
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
				<div className="d-flex justify-content-center mt-5">
					<Button size="lg" className="buttonColor">
						Get Started
					</Button>
				</div>
				<div className="mt-5 d-none-sm">
					<div className="d-flex">
						<div className="ellipse-6"></div>
						<div class="ellipse-8"></div>
					</div>
					<div className="d-flex">
						<div class="ellipse-9"></div>
						<div class="ellipse-13"></div>
					</div>
					<div className="d-flex">
						<div class="ellipse-10"></div>
						<div class="ellipse-11"></div>
					</div>
					<div className="d-flex">
						<div class="ellipse-7"></div>
						<div class="ellipse-12"></div>
					</div>
				</div>
			</Container>
		</div>
	);
}
