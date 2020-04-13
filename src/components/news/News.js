import React from "react";
import styled from "styled-components";

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
	}

	componentDidMount = () => {
		let Parser = require("rss-parser");
		let parser = new Parser();

		const RSS_FEED = async () => {
			const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

			let feed = await parser.parseURL(
				CORS_PROXY + "https://www.reddit.com/.rss"
			);

			this.setState({
				items: feed.items,
			});
			console.log(this.state.items);
		};
		RSS_FEED();
	};

	render() {
		const { items } = this.state;

		return (
			<>
			</>
		);
	}
}

export default News;
