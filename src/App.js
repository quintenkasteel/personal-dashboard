import React from "react";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import "./assets/stylesheets/styles.scss";
import Loader from "./assets/images/Loader.svg";

const DragGrid = React.lazy(() => import('./layout/Layout')); // Lazy-loaded
const ForeCast = React.lazy(() => import('./components/weather/Weather')); // Lazy-loaded
const News = React.lazy(() => import('./components/news/News')); // Lazy-loaded
const Clock = React.lazy(() => import('./components/clock/Clock')); // Lazy-loaded
const ToDo = React.lazy(() => import('./components/todo/ToDo')); // Lazy-loaded
const UnsplashImage = React.lazy(() => import('./components/UnsplashImage')); // Lazy-loaded

// import ForeCast from "./components/weather/Weather";
// import News from "./components/news/News";
// import DragGrid from "./layout/Layout";
// import Clock from "./components/clock/Clock";
// import ToDo from "./components/todo/ToDo";
// import UnsplashImage from "./components/UnsplashImage";






class App extends React.Component {
	state = {
		loading: true,
	};
	render() {
		return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <div className={`loader ${this.state.loading ? `active` : `done`}`}>
            <img alt="" src={Loader} />
          </div>
          <UnsplashImage>
            <DragGrid>
              <ForeCast />
              <Clock percentage/>
              <News />
              <Clock analog/>
              <ToDo />
              <Clock digital/>
            </DragGrid>
          </UnsplashImage>
        </div>
      </ React.Suspense>
		);
	}
}

export default App;
