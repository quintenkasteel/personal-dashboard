import React from "react";
import ForeCast from "./components/Weather/Weather";

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
        <ForeCast />
        <ForeCast />
        <ForeCast />
        <ForeCast />
        <ForeCast />
        <ForeCast />
			</DragGrid>
		</div>
	);
}

export default App;
