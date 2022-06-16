const BBInteractive = () => {
	return (
		<div style={{height: "100vh", position: "relative"}}>
			<iframe
				allow="camera;microphone"
				width={"100%"}
				height="100%"
				src={`https://interactiveviralads.s3.ap-south-1.amazonaws.com/bbJun22_Interactive/index.html`}
				title="creative"
			></iframe>
		</div>
	);
};

export default BBInteractive;
