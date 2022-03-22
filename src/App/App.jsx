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
					{/*
					<Route path="/mama_earth" component={Mamaearth} />
					<Route path="/bodyshop4" component={Bodyshop4} />
					<Route path="/boat" component={Boat} />
					<Route path="/play" component={Play} />
					<Route path="/vivo" component={Vivo} />
					<Route path="/govo" component={Govo} />
					<Route path="/clark" component={Clark} />
					<Route path="/ghadi" component={Ghadi} />
					<Route path="/asics" component={Asics} />
					
					<Route path="/oppo_days" component={Oppo} />
					<Route path="/w2viral" component={W2viral} />
					<Route path="/ucook_1/" component={Ucook1} />
					<Route path="/ucook_2/" component={Ucook2} />
					<Route path="/ucook_3/" component={Ucook3} />
					<Route path="/ucook_i/" component={UcookI} />
					<Route path="/ghadi_2" component={GhadiTwo} />
					<Route path="/gocrush/" component={Gocrush} />
					<Route path="/jnto_tohoku" component={Jnto1} />
					
					<Route path="/bodyshop" component={Bodyshop} />
					<Route path="/jnto_tohoku2" component={Jnto2} />
					<Route path="/ghadi_3" component={GhadiThree} />
					<Route path="/audientes" component={Audientes} />
					<Route path="/envorincs" component={Envorincs} />
					<Route path="/blackberrys_one" component={BB1} />
					<Route path="/bodyshop5" component={Bodyshop5} />
					<Route path="/bodyshop6" component={Bodyshop6} />
					<Route path="/wildstone" component={Wildstone} />
					<Route path="/asics_olympics" component={AsicsO} />
					<Route path="/blackberrys_three" component={BB3} />
					<Route path="/vega_flipkart" component={VegaTwo} />
					<Route path="/vega_amazon" component={VegaThree} />
					
					<Route path="/bankse" component={Bankse} />
					<Route path="/bankse2" component={Bankse2} />
					<Route path="/philipss" component={Philips} />
					<Route path="/omega_ad" component={Omega1} />
					<Route path="/wildstone_flipkart" component={Wildstone2} />
					<Route path="/wildstone_amazon" component={Wildstone_amazon} />
					<Route path="/odonil" component={Odonil} />
					
					<HindustanRoute path="/dabur" component={Dabar} data={data} />
					<HindustanRoute path="/zandu" component={Zandu} />
					<HindustanRoute path="/lg" component={LG} />
					<HindustanRoute path="/upes" component={Upes} />
					<HindustanRoute path="/dabur2" component={Dabur2} />
					<HindustanRoute path="/omega_2" component={Omega2} />
					<HindustanRoute path="/panasonic" component={Pana} />
					<HindustanRoute path="/philips" component={Philips} />
					<HindustanRoute path="/boddess" component={Boddess} />
					<HindustanRoute path="/boddess2" component={Boddess2} />
					<HindustanRoute path="/vega_women" component={VegaOne} />
					<HindustanRoute path="/bodyshop2" component={Bodyshop2} />
					<
					// <HindustanRoute path="/audientes_2" component={AudientesTwo} />
					<HindustanRoute
					path="/boddess_valentines1"
					component={Boddess3} 
				/> */}
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
