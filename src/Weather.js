import React from "react";
import Form from "./Form";

import "./Weather.css";

export default function Weather() {
	let weatherData = {
		description: "Scattered clouds",
		imgUrl: "https://ecstatic-haibt-c5d4d7.netlify.app/img/03n.png",
		temperature: 17,
		city: "Montreal",
		date: "Saturday, June 12 00:39",
		humidity: 64,
		wind: 2,
	};

	return (
		<div className="Weather">
			<Form />
			<div className="overview">
				<div className="summary-current-weather">
					<div className="current-description">
						<img src={weatherData.imgUrl} alt="" className="main-icon" />
						<h2>{weatherData.description}</h2>
					</div>

					<div className="detail-current-weather">
						<div className="current-weather-temp">
							<h1>{weatherData.temperature}</h1>
						</div>

						<div className="current-weather-units">
							{" "}
							<a href="/">
								<small>°C</small>
							</a>{" "}
							|{" "}
							<a href="/">
								<small>°F</small>
							</a>
						</div>
					</div>
				</div>

				<div className="current-details">
					<ul>
						<li className="city">{weatherData.city}</li>
						<li className="current-date">{weatherData.date}</li>
						<li>
							Humidity:{" "}
							<span className="humidity">{weatherData.humidity}%</span>, Wind:
							<span className="wind">{weatherData.wind} km/h</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
