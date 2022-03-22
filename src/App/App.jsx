import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import HindustanLayout from "../hoc/HindustanLayout";
import Login from "../components/Login/Login";
import HinduTimes from "../hoc/HinduTimes";
import {useState, useEffect} from "react";
import BlankPage from "../hoc/BlankPage";
import Homepage from "../Home/Homepage";
import {data} from "../data/data.json";
import Realme, {BlackberrysInteractive} from "../components/Realme";
import CreateLink from "../hoc/CreateLink";
import "./iframe_ads.scss";
import "./App.scss";
import Dabur3 from "../components/dabar/Dabur3";
import _24Seven from "../components/_24Seven/_24seven";
import Poco from "../components/Poco/Poco";
import Amd from "../components/Amd/Amd";
import AmdF1 from "../components/AmdF1/AmdF1";
import Jnto from "../components/Jnto/Jnto";
import Omega from "../components/Omega/Omega";
import Whywait from "../components/w2/Whywait";
import Whywait2 from "../components/w2/Whywait2";
import Vega from "../components/Vega/Vega";
import Mercedes from "../components/Mercedes/Mercedes";
import UcookVideoPlayer from "../components/Ucook/Ucook";
import Blackberrys from "../components/Blackberrys/Blackberrys";
import BB2 from "../components/Blackberrys/BbCarrousel/Blackberrys";
import WC1 from "../components/Blackberrys/WeddingCollection/Looks/Looks";
import WC3 from "../components/Blackberrys/WeddingCollection/Shake/ShakeAd";
import WC2 from "../components/Blackberrys/WeddingCollection/WeddingVideo/Blackberrys";

const HindustanRoute = ({component: Component, data, ...rest}) => {
	const [object, setObject] = useState();
	let location = useLocation();

	useEffect(() => {
		if (data) {
			let obj = data.filter((camp) => camp.url === location.pathname);
			setObject(obj[0]);
		}
	}, [data, location]);

	return data ? (
		object ? (
			object.type === "parallax" ? (
				<Route
					{...rest}
					render={(props) => (
						<div style={{height: "100vh", position: "relative"}}>
							<iframe
								width={"100%"}
								height="100%"
								src={`https://interactiveviralads.s3.ap-south-1.amazonaws.com${object.location}/preview.html`}
								title="creative"
							></iframe>
						</div>
					)}
				></Route>
			) : (
				<Route
					{...rest}
					render={(props) => (
						<HindustanLayout>
							<div className={`_${object.width}x${object.height}frame`}>
								<iframe
									src={`https://interactiveviralads.s3.ap-south-1.amazonaws.com${object.location}/index.html`}
									title="creative"
								></iframe>
							</div>
						</HindustanLayout>
					)}
				></Route>
			)
		) : (
			<div>...Loading</div>
		)
	) : (
		<div>
			<Route
				{...rest}
				render={(props) => (
					<HindustanLayout>
						<div style={{display: "flex", justifyContent: "center"}}>
							<Component />
						</div>
					</HindustanLayout>
				)}
			></Route>
		</div>
	);
};

const App = () => {
	const [password, setPassword] = useState("");

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/wedding_collection1" component={WC1} />
					<Route path="/wedding_collection2" component={WC2} />
					<Route path="/wedding_collection3" component={WC3} />
					<Route path="/blackberrys_two" component={BB2} />
					<Route path="/blackberrys" component={Blackberrys} />
					<Route path="/ucook" component={UcookVideoPlayer} />
					<Route path="/mercedes" component={Mercedes} />
					<Route path="/whywait" component={Whywait} />
					<Route path="/omega" component={Omega} />
					<Route path="/jnto" component={Jnto} />
					<Route path="/poco" component={Poco} />
					<HindustanRoute path="/amdf1" component={AmdF1} />
					<HindustanRoute path="/amd" component={Amd} />
					<HindustanRoute path="/_24seven" component={_24Seven} />
					<HindustanRoute path="/vega" component={Vega} />
					<HindustanRoute path="/whywait2" component={Whywait2} />
					<HindustanRoute path="/dabur_c" component={Dabur3} />
					<Route path="/create/link" component={CreateLink} />
					<Route path="/:dimension/bp/:creative" component={BlankPage} />
					<Route path="/:dimension/ht/:creative" component={HinduTimes} />
					<Route path="/interactive/realme/" component={Realme} />
					<Route
						path="/interactive/blackberrys/"
						component={BlackberrysInteractive}
					/>
					<HindustanRoute path="/:campaign" data={data} />
					<Route exact path="/">
						{!password ? (
							<Login setPassword={setPassword} />
						) : (
							<Homepage />
						)}
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
