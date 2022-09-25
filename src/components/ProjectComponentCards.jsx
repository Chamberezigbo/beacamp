import React from "react";
import { Card } from "react-bootstrap";
import { UilUsersAlt, UilArrowRight } from "@iconscout/react-unicons";

export default function ProjectComponentCards() {
	return (
		<>
			<Card className="mb-5">
				<Card.Body>
					<Card.Title className="h1">
						Building an auto <br /> respond bot
					</Card.Title>
					<Card.Text className="mt-4 text-muted">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Card.Link href="#">
						<span class="badge bg-light text-danger p-2">Java</span>
					</Card.Link>
					<Card.Link href="#">
						<span class="badge bg-light text-danger p-2">
							Node.js
						</span>
					</Card.Link>
					<Card.Link href="#">
						<span class="badge bg-light text-danger p-2">
							Python
						</span>
					</Card.Link>
				</Card.Body>
				<footer className="mt-4 ">
					<div className="d-flex pb-3">
						<div>
							<p>
								<span className="text-muted">Level:</span>
								Easy
							</p>
							<p>
								<UilUsersAlt /> 200 Developers
							</p>
						</div>
						<div className="ms-auto pt-3">
							<span className="text-danger text-capitalize">
								<a href="#">
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
