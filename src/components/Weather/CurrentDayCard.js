import React from "react";
import moment from "moment";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";

const CurrentDayCardContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	width: 100%;
`;

const CurrentDayCard = ({ data }) => {
	let newDate = new Date();
	const weekday = data.dt * 1000;

	newDate.setTime(weekday);

	const IconContainer = styled.div`
		height: 100px;
		width: 100px;
    position: relative;

		object {
			height: 100%;
			width: 100%;
		}
	`;

	return (
		<>
			{data ? (
				<CurrentDayCardContainer>
					{data.dt ? (
						<h4 className="day-card-title">{moment(newDate).format("dddd")}</h4>
					) : null}
					{data.main ? <h2>{Math.round(data.main.temp)} °F</h2> : null}
					{data.weather ? (
						<IconContainer className="weather-icon-container">
							<WeatherIcon id={data.weather[0].id} />
						</IconContainer>
					) : null}
				</CurrentDayCardContainer>
			) : null}
		</>
	);
};

export default CurrentDayCard;
