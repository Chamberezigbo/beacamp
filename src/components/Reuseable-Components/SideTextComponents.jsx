import React from "react";

export default function SideTextComponents({ title, subTitle }) {
	return (
		<div className="side-text">
			<h1>{title}</h1>
			<p className="pt-4">{subTitle}</p>
		</div>
	);
}
