import React from "react";
import styled from "styled-components";

import WeekCard from "./WeekCard";
import DayCard from "./DayCard";
import CurrentDayCard from "./CurrentDayCard";

const WeatherContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column;
	color: white;
`;

class Weather extends React.Component {
	state = {
		fullData: [],
		dailyData: [],
		currentDay: {},
		lon: 0,
		lat: 0,
  };
  
	getLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				lon: position.coords.longitude,
				lat: position.coords.latitude,
      });
      
      const weatherAPI_KEY = "2da36ddc24a5b9e951ccd807f9ea0680";
			const weatherAPI_BASE =
				"https://api.openweathermap.org/data/2.5/forecast";
			const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const weatherURL = `${weatherAPI_BASE}?lat=${lat}&lon=${lon}&units=metric&APPID=${weatherAPI_KEY}`;

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
        
		});
	};

	componentDidMount() {
		this.getLocation();
		setInterval(this.getLocation, 600000);
	}

	formatDayCards = () => {
		return this.state.dailyData.map((reading, index) => (
			<DayCard reading={reading} key={index} />
		));
	};

	render() {
		return (
			<>
				<WeatherContainer>
					{this.state.currentDay ? (
						<CurrentDayCard data={this.state.currentDay} />
					) : null}
					{this.state.dailyData ? (
						<WeekCard>{this.formatDayCards()}</WeekCard>
					) : null}
					{!this.state.fullData ? <p>Cant get location</p> : null}
				</WeatherContainer>
			</>
		);
	}
}

export default Weather;
