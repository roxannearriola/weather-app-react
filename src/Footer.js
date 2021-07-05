import React from "react";

import "./Footer.css";

export default function Footer() {
	return (
		<div className="Footer">
			<a
				href="https://github.com/roxannearriola/weather-app-react"
				target="_blank"
				rel="noreferrer"
			>
				Open-source code
			</a>{" "}
			by Roxanne A.
			<br />
			Icons made by{" "}
			<a href="https://www.freepik.com" title="Freepik">
				{" "}
				Freepik
			</a>{" "}
			from{" "}
			<a href="https://www.flaticon.com/" title="Flaticon">
				www.flaticon.com
			</a>
		</div>
	);
}
