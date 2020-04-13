import React from "react";
import styled from "styled-components";

import WeekCard from "./WeekCard";
import DayCard from "./DayCard";
import CurrentDayCard from "./CurrentDayCard";

const WeatherContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

class ForeCast extends React.Component {
	state = {
		fullData: [],
		dailyData: [],
		currentDay: {},
	};

	componentDidMount = () => {
		const weatherAPI_KEY = "2da36ddc24a5b9e951ccd807f9ea0680";

		const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${weatherAPI_KEY}`;

		fetch(weatherURL)
			.then((res) => res.json())
			.then((data) => {
				const dailyData = data.list.filter((reading) =>
					reading.dt_txt.includes("18:00:00")
				);

				const currentDayData = data.list[0];

				this.setState({
					fullData: data.list,
					dailyData: dailyData,
					currentDay: currentDayData,
				});
			});
  };
  
  
	formatDayCards = () => {
		return this.state.dailyData.map((reading, index) => (
			<DayCard reading={reading} key={index} />
		));
	};

	render() {
    console.log(this.state.fullData)
    
		return (
			<>
				<WeatherContainer>
					<WeekCard>{this.formatDayCards()}</WeekCard>
				</WeatherContainer>
			</>
		);
	}
}

export default ForeCast;
