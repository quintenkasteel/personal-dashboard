import React from "react";
import styled from "styled-components";


class UnsplashImage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imageSrc: "",
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
			loading: true,
		};
	}

	updateWindowDimensions = () => {
		this.setState({ windowWidth: window.innerWidth });
		this.setState({ windowHeight: window.innerHeight });
	};

	renderImage = () => {
		const { imageSrc, windowWidth, windowHeight } = this.state;

		if (imageSrc === "") {
			return fetch(
				`https://source.unsplash.com/${windowWidth}x${windowHeight}?nature-landscapes`
			).then((res) => {
				this.setState({
					imageSrc: res.url,
					loading: false,
				});
      });
		} else {
			return null;
		}
	};

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	componentDidMount() {
		this.renderImage();
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	render() {
		const { imageSrc, loading } = this.state;
		const { children } = this.props;

		const BackgroundImage = styled.div`
			position: fixed;
			height: 100%;
			width: 100%;
			opacity: ${loading ? 0 : 1};
			background-position: center center;
      background: url(${imageSrc});
      
      &:before {
        content: "";
        background-color: black;
        height: 100%;
        width: 100%;
        opacity: 0.15;
        position: absolute;
      }
      `

		return (
			<>
				
				<BackgroundImage >{children}</BackgroundImage>
			</>
		);
	}
}

export default UnsplashImage;
