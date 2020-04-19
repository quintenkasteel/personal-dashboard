import React from "react";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";

const CurrentDayCardContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	width: 100%;
	position: relative;
	align-items: center;
`;

const IconContainer = styled.div`
	height: 100%;
	width: 100%;
	max-width: 150px;
	position: relative;

	object {
		height: 100%;
		width: 100%;
	}
`;

const CurrentDayCardData = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: flex-start;
	text-align: left;
	font-size: 2rem;
	font-weight: bold;
	width: 100%;
`;

const CurrentDayCard = ({ data, lang, fahrenheit }) => {
	let newDate = new Date();
	const weekday = data.dt * 1000;
	newDate.setTime(weekday);

	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return (
		<>
			{data ? (
				<CurrentDayCardContainer>
					{data.weather ? (
						<IconContainer className="weather-icon-container">
							<WeatherIcon id={data.weather[0].id} />
						</IconContainer>
					) : null}
					<CurrentDayCardData>
						{data.dt ? (
							<h4 className="day-card-title">{days[newDate.getDay()]}</h4>
						) : null}
						{data.main ? (
							fahrenheit ? (
								<h2>{Math.round(data.main.temp * (5 / 9) + 32)} °F</h2>
							) : (
								<h2>{Math.round(data.main.temp)} °C</h2>
							)
						) : null}
					</CurrentDayCardData>
				</CurrentDayCardContainer>
			) : null}
		</>
	);
};

export default CurrentDayCard;
