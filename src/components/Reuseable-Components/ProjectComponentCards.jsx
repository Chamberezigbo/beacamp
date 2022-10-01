// ? using app.css for the style //
import React from "react";
import { Card } from "react-bootstrap";
import { UilUsersAlt, UilArrowRight } from "@iconscout/react-unicons";

export default function ProjectComponentCards() {
	return (
		<>
			<Card className="mb-5 project-card">
				<Card.Body>
					<Card.Title className="building-an-auto-respond-bot pt-4">
						Building an auto <br /> respond bot
					</Card.Title>
					<Card.Text className="mt-4 text-muted">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Card.Link href="#">
						<span className="badge bg-light text-danger p-2">
							Java
						</span>
					</Card.Link>
					<Card.Link href="#">
						<span className="badge bg-light text-danger p-2">
							Node.js
						</span>
					</Card.Link>
					<Card.Link href="#">
						<span className="badge bg-light text-danger p-2">
							Python
						</span>
					</Card.Link>
				</Card.Body>
				<footer className="mt-4 ">
					<div className="d-flex pb-3 ps-3">
						<div>
							<p>
								<span className="text-muted Level-Easy">
									Level:
								</span>
								<span className="Level-Easy text-style-2">
									Easy
								</span>
							</p>
							<p>
								<UilUsersAlt /> 200 Developers
							</p>
						</div>
						<div className="ms-auto pt-3">
							<span className="text-capitalize">
								<a href="#" className="Join-Project">
									join project <UilArrowRight />
								</a>
							</span>
						</div>
					</div>
				</footer>
			</Card>
		</>
	);
}
