import React from "react";
import UcookVideoPlayer from "./UcookVideoPlayer";
import AOS from "aos";
import "aos/dist/aos.css";

const Ucook = () => {
	if (typeof window !== `undefined`) {
		AOS.init({
			once: false,
			mirror: false,
		});
	}
	return (
		<div className="page">
			<div className="frame" style={{position: "relative"}}>
				<UcookVideoPlayer />
			</div>
		</div>
	);
};

export default Ucook;
