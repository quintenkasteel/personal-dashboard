import React from "react";
import ForeCast from "./components/weather/Weather";
import News from "./components/news/News";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import "./assets/stylesheets/styles.scss";
import DragGrid from "./layout/Layout";


function App() {
	return (
		<div className="App">
			<DragGrid>
				<ForeCast />
				<ForeCast />
				<ForeCast />
				<News />
			</DragGrid>
		</div>
	);
}

export default App;
