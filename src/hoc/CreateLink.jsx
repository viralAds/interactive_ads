import { Button } from "reactstrap";
import Select from "react-select";
import { useState } from "react";
import "./createpage.scss";
import Navbar from "../Navbar/Navbar";
import { IoCopyOutline } from "react-icons/io5";

const CreateLink = () => {
  const FrameOptions = [
    { value: "300x250", label: "300x250" },
    { value: "320x480", label: "320x480" },
    { value: "600x300", label: "600x300" },
    { value: "640x360", label: "640x360" },
    { value: "360x640", label: "360x640" },
    { value: "640x960", label: "640x960" },
    { value: "1080x1920", label: "1080x1920" },
  ];
  const [selectedFrame, setSelectedFrame] = useState();
  const LayoutOptions = [
    { value: "ht", label: "Hindustan Times" },
    { value: "bp", label: "Blank Page" },
  ];
  const [isready, setIsReady] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState();
  const [creativeName, setCreativeName] = useState();
  const [link, setLink] = useState("https://ekaleido.tech/");
  const handleFrameType = (selectedFrame) => {
    setSelectedFrame(selectedFrame);
  };
  const handleLayoutType = (selectedLayout) => {
    setSelectedLayout(selectedLayout);
  };

  const handleCreativeName = (e) => {
    setCreativeName(e.target.value);
  };

  const create = () => {
    let lnk =
      link +
      selectedFrame.value +
      "/" +
      selectedLayout.value +
      "/" +
      creativeName +
      "/";
    setLink(lnk);
    setIsReady(true);
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
              value={selectedFrame}
              onChange={handleFrameType}
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
              value={selectedLayout}
              onChange={handleLayoutType}
            />
          </div>
          <div className="inputField-cnt">
            <label>Creative Name: </label>
            <input
              className="inputfield"
              type="text"
              placeholder="Enter Creative Name"
              onChange={handleCreativeName}
            />
          </div>
          {selectedFrame && selectedLayout && creativeName && (
            <Button onClick={create}>CREATE LINK</Button>
          )}
          {isready && (
            <div className="link-cnt">
              <input
                className="creative-link"
                type="text"
                disabled
                value={link}
              />
              <div
                className="icon-cnt"
                onClick={() => {
                  navigator.clipboard.writeText(link);
                  alert("link copied");
                }}
              >
                <IoCopyOutline
                  className="react-copy-icon"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateLink;
