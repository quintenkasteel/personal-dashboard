import React from "react";
import styled from "styled-components";

let Parser = require("rss-parser");
let parser = new Parser();

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			url: "http://feeds.bbci.co.uk/news/rss.xml",
			value: "",
		};
	}

	componentDidMount = () => {
    this.RSS_FEED();
	};

	RSS_FEED = async () => {
		const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

		let feed = await parser.parseURL(CORS_PROXY + this.state.url);

		this.setState({
			items: feed.items,
		});
	};

	handleKey = (e) => {
		const keyCode = e.keyCode || e.which;
		if (keyCode === 13) {
			this.setState(
				({ value }) => ({
          items: [],
					url: value,
				}),
				() => {
          this.RSS_FEED();
				}
			);
		}
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	render() {
		const { items } = this.state;

		const NewsContainer = styled.div`
			overflow-y: auto;
			overflow-x: hidden;
			height: 100%;
		`;

		const NewsItem = styled.div`
			position: relative;
			display: flex;
			flex-flow: row nowrap;
			margin: 10px 0;
		`;

		const Link = styled.a`
			height: 100%;
		`;

		const ImageContainer = styled.div`
			height: auto;
			width: 20%;
			position: relative;
		`;

		const Image = styled.img`
			position: absolute;
			height: 100%;
			object-fit: cover;
			width: 100%;
			top: 0;
			left: 0%;
		`;

		const Heading = styled.h3`
			font-size: 1rem;
			font-weight: bold;
			max-height: 35px;
			margin-bottom: 3px;
		`;

		const NewsItemText = styled.div`
			position: relative;
			padding: 10px;
			width: 80%;
		`;

		const Paragraph = styled.p`
			font-size: 0.8rem;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		`;

	  const	getImage = (string) => {
			var m = "",
				url = [],
				str = string,
				rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

			while ((m = rex.exec(str))) {
        return (
          url.push(m[1])
        ) 
			}

			return url !== [] ? (
				<ImageContainer>
					<Image src={url} />
				</ImageContainer>
			) : null;
		};

		return (
			<>
				<input
					type="text"
					value={this.state.value}
					onKeyUp={this.handleKey}
					onChange={this.handleChange}
				/>
				<NewsContainer>
					{items !== [] ? (
						items.map((item, i) => (
							<Link href={item.link} key={item + i}>
								<NewsItem>
									{getImage(item.content)}
									<NewsItemText>
										<Heading>{item.title}</Heading>
										<Paragraph>{item.contentSnippet}</Paragraph>
									</NewsItemText>
								</NewsItem>
							</Link>
						))
					) : (
						<p>loading....</p>
					)}
				</NewsContainer>
			</>
		);
	}
}

export default News;
