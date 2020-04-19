import React from "react";
import styled from "styled-components";

const DigitalClockContainer = styled.div`
	width: 80%;
	display: flex;
	padding: 1rem;
	flex-flow: column;
	align-items: center;
	justify-content: center;
`;

const DigitalClockItem = styled.span`
	width: 80%;
	display: flex;
	flex-flow: row nowrap;
	font-weight: bold;
	color: white;
	font-size: 2.3rem;
	text-align: center;
	justify-content: center;
	align-items: center;
`;

const AnalogClockContainer = styled.div`
	position: relative;
	height: auto;
	overflow: hidden;
	background: #fff;
	width: 50%;
	display: flex;

	&.styling {
		box-shadow: 0px 0px 10px #888888;
		border-radius: 50%;
		min-width: 100px;
		margin-top: 1%;
	}

	&:before {
		content: "";
		display: block;
		padding-top: 100%;
	}
`;

const AnalogClockContent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AnalogIndicatorCover = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	width: 3%;
	height: 3%;
	background-color: lightgrey;
	z-index: 5;
`;

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.child = React.createRef();
		this.state = {
      today: new Date(),
      startTime: 9,
      endTime: 17,
			showMinutes: true,
			showSeconds: true,
		};
	}
	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 500);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	tick() {
		this.setState({
			today: new Date(),
		});
	}
	render() {
		const { today, startTime, endTime } = this.state;
		const { analog, digital, percentage } = this.props;

		const currentHour = today.getHours();
		const currentMinute = today.getMinutes();
		const currentSecond = today.getSeconds();

		const workDayLength = endTime - startTime;

		const calcHourPercent = ((currentHour - startTime) / workDayLength) * 100;
		const calcMinutePercent = (currentMinute / 60 / workDayLength) * 100;
		const calcSecondPercent = (currentSecond / 60 / 60 / workDayLength) * 100;
		const calcPercent = calcHourPercent + calcMinutePercent + calcSecondPercent;
		const showPercent = Math.round((calcPercent + Number.EPSILON) * 100) / 100;

		const hoursDegrees = currentHour * 30 + currentMinute / 2;
		const minutesDegrees = currentMinute * 6 + currentSecond / 10;
		const secondsDegrees = currentSecond * 6;

		const AnalogStyledHours = styled.div`
			transform: rotateZ(${hoursDegrees}deg);
			border-radius: 10px;
			transform-origin: bottom;
			outline: 1px solid transparent;
			position: absolute;
			bottom: 50%;
			width: 1.5%;
			height: 22.5%;
			z-index: 4;
			background-color: #8f9c6c;
		`;

		const AnalogStyledMinutes = styled.div`
			transform: rotateZ(${minutesDegrees}deg);
			border-radius: 10px;
			transform-origin: bottom;
			outline: 1px solid transparent;
			position: absolute;
			bottom: 50%;
			width: 1%;
			height: 30%;
			z-index: 3;
			background-color: #cd6a51;
		`;

		const AnalogStyledSeconds = styled.div`
			transform: rotateZ(${secondsDegrees}deg);
			border-radius: 10px;
			transform-origin: bottom;
			outline: 1px solid transparent;
			position: absolute;
			bottom: 50%;
			width: 0.5%;
			height: 37.5%;
			z-index: 2;
			background-color: #dfc48c;
		`;

		return (
			<>
				{analog && !digital && !percentage ? (
					<AnalogClockContainer className="clock-container styling">
						<AnalogClockContent id="clock" className="clock-content">
							<AnalogStyledHours />
							<AnalogStyledMinutes />
							<AnalogStyledSeconds />
							<AnalogIndicatorCover />
						</AnalogClockContent>
					</AnalogClockContainer>
				) : null}
				{percentage && !analog && !digital ? (
					<DigitalClockContainer>
						<DigitalClockItem>
							{calcPercent > 100
								? `+${(showPercent - 100).toFixed(2)}%`
								: `${showPercent.toFixed(2)}%`}
						</DigitalClockItem>
					</DigitalClockContainer>
				) : null}

				{(digital && !analog && !percentage) ||
				(!digital && !analog && !percentage) ? (
					<DigitalClockContainer>
						<DigitalClockItem>
							{currentHour}:{currentMinute}:{currentSecond}
						</DigitalClockItem>
					</DigitalClockContainer>
				) : null}
			</>
		);
	}
}

export default Clock;
