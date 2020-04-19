import React from "react";
import GridLayout from "react-grid-layout";
import Card from "../components/Card";

class DragGrid extends React.Component {
	state = {
		windowWidth: 0,
		windowHeight: 0,
	};

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({ windowWidth: window.innerWidth });
		this.setState({ windowHeight: window.innerHeight });
	};

	render() {
		const { children } = this.props;
		const { windowHeight, windowWidth } = this.state;

		const rowSize = () => windowHeight / 12;

		return (
			children && (
				<GridLayout
					className="layout"
					cols={12}
					rowHeight={rowSize()}
					width={windowWidth}>
					{React.Children.map(children, (child, i) =>
						i === 0 ? (
							<div
								key={i}
								data-grid={{
									x: 0,
									y: 0,
									w: 4,
									h: 4,
									minW: 4,
									maxW: 12,
									minH: 4,
									maxH: 12,
								}}
								className="card">
								{child}
							</div>
						) : i === 1 ? (
							<div
								key={i}
								data-grid={{
									x: 4,
									y: 0,
									w: 4,
									h: 4,
									minW: 4,
									maxW: 12,
								}}
								className="card">
								{child}
							</div>
						) : i === 2 ? (
							<div
								key={i}
								data-grid={{
									x: 8,
									y: 0,
									w: 4,
									h: 4,
									minW: 4,
									maxW: 12,
								}}
								className="card">
								{child}
							</div>
						) : i === 3 ? (
							<div
								key={i}
								data-grid={{
									x: 0,
									y: 4,
									w: 4,
									h: 4,
									minW: 4,
									maxW: 12,
								}}
								className="card">
								{child}
							</div>
						) : i === 4 ? (
							<div
								key={i}
								data-grid={{
									x: 4,
									y: 4,
									w: 4,
									h: 4,
									minW: 4,
									maxW: 12,
								}}
								className="card">
								{child}
							</div>
						) : i === 5 ? (
							<div
								key={i}
								data-grid={{
									x: 8,
									y: 4,
									w: 4,
									h: 4,
									minW: 4,
									maxW: 12,
								}}
								className="card">
								{child}
							</div>
						) : i === 6 ? (
							<div
								key={i}
								data-grid={{
									x: 0,
									y: 8,
									w: 4,
									h: 4,
									minW: 4,
									maxW: 12,
								}}
								className="card">
								{child}
							</div>
						) : i === 7 ? (
							<div
								key={i}
								data-grid={{
									x: 4,
									y: 8,
									w: 4,
									h: 4,
									minW: 4,
									maxW: 12,
								}}
								className="card">
								{child}
							</div>
						) : i === 8 ? (
							<div
								key={i}
								data-grid={{
									x: 8,
									y: 8,
									w: 4,
									h: 4,
									minW: 4,
									maxW: 12,
								}}
								className="card">
								{child}
							</div>
						) : null
					)}
				</GridLayout>
			)
		);
	}
}

export default DragGrid;
