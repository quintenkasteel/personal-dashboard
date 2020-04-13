import React from "react";
import moment from "moment";
import styled from "styled-components";

const CurrentDayCardContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	width: 100%;
`;

const CurrentDayCard = ({ data }) => {
	let newDate = new Date();
	const weekday = data.dt * 1000;

	newDate.setTime(weekday);

	// const imgURL = `owf owf-${data.weather} owf-5x`;

	console.log(data.main.temp, "data");

	return (
		<>
			<CurrentDayCardContainer>
				<div className="day-card">
					<h4 className="day-card-title">{moment(newDate).format("dddd")}</h4>
					{/* <h2>{Math.round(data.main.temp)} °F</h2> */}
				</div>
			</CurrentDayCardContainer>
		</>
	);
};

export default CurrentDayCard;
