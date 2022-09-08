import {Button} from "reactstrap";
import Select from "react-select";
import {useState} from "react";
import "./createpage.scss";
import Navbar from "../Navbar/Navbar";

const CreateLink = () => {
	const FrameOptions = [
		{value: "300x250", label: "300x250"},
		{value: "320x480", label: "320x480"},
		{value: "600x300", label: "600x300"},
		{value: "640x360", label: "640x360"},
		{value: "360x640", label: "360x640"},
		{value: "640x960", label: "640x960"},
		{value: "1080x1920", label: "1080x1920"},
	];
	const LayoutOptions = [
		{value: "pl", label: "Parallax"},
		{value: "nr", label: "Normal Layout"},
	];

	const [creativeSize, setCreativeSize] = useState();
	const [layout, setSelectedLayout] = useState();
	const [creativeName, setCreativeName] = useState();

	const handleFrameSize = (selectedFrame) => {
		setCreativeSize(selectedFrame);
	};
	const handleLayoutType = (selectedLayout) => {
		setSelectedLayout(selectedLayout);
	};
	const handleUniqueUrl = (e) => {
		setCreativeName(e.target.value);
	};

	const create = () => {
		// Code to Upload file on backend
		let width = creativeSize.value.split("x")[0];
		let height = creativeSize.value.split("x")[1];

		console.log("width", width);
		console.log("height", height);
		console.log("layout", layout);
		console.log("creative Name", creativeName);
	};

	const selectStyles = {
		menu: () => ({
			width: "100%",
			borderBottom: "1px dotted pink",
			padding: 20,
		}),
	};

	return (
		<>
			<Navbar />
			<div className="cl_page">
				<div className="form">
					<div className="inputField-cnt">
						<label>Frame Size: </label>
						<Select
							className="frametypes"
							classNamePrefix="frametypes"
							style={selectStyles}
							options={FrameOptions}
							isSearchable={true}
							value={creativeSize}
							onChange={handleFrameSize}
						/>
					</div>
					<div className="inputField-cnt">
						<label>Layout: </label>
						<Select
							className="layouttypes"
							classNamePrefix="layouttypes"
							style={selectStyles}
							options={LayoutOptions}
							isSearchable={true}
							value={layout}
							onChange={handleLayoutType}
						/>
					</div>
					<div className="inputField-cnt">
						<label>Unique URL: </label>
						<input
							className="inputfield"
							type="text"
							placeholder="Enter Creative Name"
							onChange={handleUniqueUrl}
						/>
					</div>
					{creativeSize && layout && creativeName && (
						<Button onClick={create}>UPLOAD</Button>
					)}
				</div>
			</div>
		</>
	);
};

export default CreateLink;
