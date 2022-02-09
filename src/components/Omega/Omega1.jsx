import "../Common/iframe_ads.scss";

const Omega1 = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        width={"100%"}
        height={"100%"}
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/omega_news-main/index.html"
        title="omega viral add"
      ></iframe>
    </div>
  );
};

export default Omega1;

export const Omega2 = () => {
  return (
    <div className="_320x480frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/omega-master/index.html"
        title="omega viral add"
      ></iframe>
    </div>
  );
};
