import React from "react";
import Stories from "react-insta-stories";
import one from "../../assets/img/whywait/1.jpeg";
import two from "../../assets/img/whywait/2.jpeg";
import three from "../../assets/img/whywait/3.jpeg";
import four from "../../assets/img/whywait/4.jpeg";
import five from "../../assets/img/whywait/5.jpeg";

const stories = [
  {
    url: one,
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
    seeMore: ({ close }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#ffffff",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            onClick={close}
            style={{
              position: "relative",
              height: "50%",
              width: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              position: "relative",
              height: "50%",
              padding: 10,
              backgroundImage: "linear-gradient(0deg, #1e1e1e, transparent)",
            }}
          >
            <h2 style={{ color: "#fff", fontWeight: "bold" }}>
              <a
                style={{ color: "#ffffff" }}
                href="https://www.blackberrys.com/"
                target="_blank"
                rel="noreferrer"
              >
                Blackberrys
              </a>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>Rs. 999/-</h3>
          </div>
        </div>
      );
    },
  },
  {
    url: two,
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
    seeMore: ({ close }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#ffffff",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            onClick={close}
            style={{
              position: "relative",
              height: "50%",
              width: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              position: "relative",
              height: "50%",
              padding: 10,
              backgroundImage: "linear-gradient(0deg, #1e1e1e, transparent)",
            }}
          >
            <h2 style={{ color: "#fff", fontWeight: "bold" }}>
              <a
                style={{ color: "#ffffff" }}
                href="https://www.blackberrys.com/"
                target="_blank"
                rel="noreferrer"
              >
                Blackberrys
              </a>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>Rs. 999/-</h3>
          </div>
        </div>
      );
    },
  },
  {
    url: three,
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
    seeMore: ({ close }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#ffffff",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            onClick={close}
            style={{
              position: "relative",
              height: "50%",
              width: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              position: "relative",
              height: "50%",
              padding: 10,
              backgroundImage: "linear-gradient(0deg, #1e1e1e, transparent)",
            }}
          >
            <h2 style={{ color: "#fff", fontWeight: "bold" }}>
              <a
                style={{ color: "#ffffff" }}
                href="https://www.blackberrys.com/"
                target="_blank"
                rel="noreferrer"
              >
                Blackberrys
              </a>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>Rs. 999/-</h3>
          </div>
        </div>
      );
    },
  },
  {
    url: four,
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
    seeMore: ({ close }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#ffffff",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            onClick={close}
            style={{
              position: "relative",
              height: "50%",
              width: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              position: "relative",
              height: "50%",
              padding: 10,
              backgroundImage: "linear-gradient(0deg, #1e1e1e, transparent)",
            }}
          >
            <h2 style={{ color: "#fff", fontWeight: "bold" }}>
              <a
                style={{ color: "#ffffff" }}
                href="https://www.blackberrys.com/"
                target="_blank"
                rel="noreferrer"
              >
                Blackberrys
              </a>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>Rs. 999/-</h3>
          </div>
        </div>
      );
    },
  },
  {
    url: five,
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
    seeMore: ({ close }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#ffffff",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            onClick={close}
            style={{
              position: "relative",
              height: "50%",
              width: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              position: "relative",
              height: "50%",
              padding: 10,
              backgroundImage: "linear-gradient(0deg, #1e1e1e, transparent)",
            }}
          >
            <h2 style={{ color: "#fff", fontWeight: "bold" }}>
              <a
                style={{ color: "#ffffff" }}
                href="https://www.blackberrys.com/"
                target="_blank"
                rel="noreferrer"
              >
                Blackberrys
              </a>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>Rs. 999/-</h3>
          </div>
        </div>
      );
    },
  },
];

const Whywait = () => {
  return (
    <div
      className="w2-bg"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(45deg, #1e1e1e, #363636)",
        padding: "1rem 0",
        height: "100vh",
      }}
    >
      <div style={{ aspectRatio: "16 / 9", position: "relative" }}>
        <Stories
          stories={stories}
          defaultInterval={5000}
          width={"100%"}
          height={"100vh"}
          storyStyles={{ borderRadius: 10, height: "100vh" }}
          storyContainerStyles={{
            borderRadius: 10,
            boxShadow: "rgb(14 14 14) 3px 3px 20px 4px",
            height: "100vh",
          }}
        />
      </div>
    </div>
  );
};

export default Whywait;
