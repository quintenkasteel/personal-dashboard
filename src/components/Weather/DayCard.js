import React from "react";
import moment from "moment";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";

const DayCardContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	width: 100%;
`;

const DayCard = ({ reading }) => {
	let newDate = new Date();
	const weekday = reading.dt * 1000;

	newDate.setTime(weekday);

	const IconContainer = styled.div`
		height: 40px;
		width: 40px;
    position: relative;

		object {
			height: 100%;
			width: 100%;
		}
	`;

	return (
		<>
			{reading ? (
				<DayCardContainer>
					<div className="day-card">
						<h4 className="day-card-title">{moment(newDate).format("dddd")}</h4>
						<IconContainer className="weather-icon-container">
							<WeatherIcon id={reading.weather[0].id} />
						</IconContainer>

						<h2>{Math.round(reading.main.temp)} °F</h2>
						<div className="day-card-body">
							<p className="card-text">{reading.weather[0].description}</p>
						</div>
					</div>
				</DayCardContainer>
			) : null}
		</>
	);
};

export default DayCard;
