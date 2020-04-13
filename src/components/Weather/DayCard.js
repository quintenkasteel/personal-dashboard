import React from "react";
import moment from "moment";
import styled from "styled-components";

const DayCardContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	width: 20%;
`;

const CurrentDayCardContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	width: 100%;
`;

const DayCard = ({ reading, currentDay }) => {
	let newDate = new Date();
	const weekday = reading.dt * 1000;

	newDate.setTime(weekday);

	const imgURL = `owf owf-${reading.weather[0].id} owf-5x`;

	return (
		<>
			<DayCardContainer>
				<div className="day-card">
					<h4 className="day-card-title">{moment(newDate).format("dddd")}</h4>
					<i className={imgURL}></i>

					<h2>{Math.round(reading.main.temp)} °F</h2>
					<div className="day-card-body">
						<p className="card-text">{reading.weather[0].description}</p>
					</div>
				</div>
			</DayCardContainer>
		</>
	);
};

export default DayCard;
