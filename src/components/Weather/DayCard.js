import React from "react";
import moment from "moment";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";
const HoverInfo = styled.div`
	display: none;
	position: absolute;
	top: calc(100% + 10px);
	left: 50%;
	background: black;
	color: white;
	transform: translateX(-50%);
	z-index: 2;
`;
const DayCardContainer = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	flex-flow: column wrap;
	width: 100%;

	&:hover {
		.info {
			display: flex;
		}
	}
`;

const IconContainer = styled.div`
	height: 40px;
	width: 40px;
	position: relative;

	object {
		height: 100%;
		width: 100%;
	}
`;

const DayCard = ({ reading, fahrenheit }) => {
	let newDate = new Date();
	const weekday = reading.dt * 1000;
	newDate.setTime(weekday);

	var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	return (
		<>
			{reading ? (
				<DayCardContainer>
					<h4 className="day-card-title">{days[newDate.getDay()]}</h4>
					<IconContainer className="weather-icon-container">
						<WeatherIcon id={reading.weather[0].id} />
					</IconContainer>
					{reading.main ? (
							fahrenheit ? (
								<h2>{Math.round(reading.main.temp * (5 / 9) + 32)} °F</h2>
							) : (
								<h2>{Math.round(reading.main.temp)} °C</h2>
							)
						) : null}
					<HoverInfo className="info">
						<p className="card-text">{reading.weather[0].description}</p>
					</HoverInfo>
				</DayCardContainer>
			) : null}
		</>
	);
};

export default DayCard;
