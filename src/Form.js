import React from "react";

import "./Form.css";

export default function Form() {
	return (
		<div className="Form">
			<form>
				<input type="search" placeholder="Enter a city" autoComplete="off" />

				<button type="submit">
					<i className="fas fa-search"></i>
				</button>

				<button type="button">
					<i className="fas fa-location-arrow"></i>
				</button>
			</form>
		</div>
	);
}
