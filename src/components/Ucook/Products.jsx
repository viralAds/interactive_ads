import React from "react";
import cooker from "../../assets/img/ucook/cooker.jpg";
import cooker1 from "../../assets/img/ucook/cooker1.jpg";
import cooker2 from "../../assets/img/ucook/cooker2.jpg";
import cooker3 from "../../assets/img/ucook/cooker3.jpg";
import topproduct from "../../assets/img/ucook/top_products.png";
import close from "../../assets/img/ucook/close.png";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Carousel } from "react-responsive-carousel";

const ProductDetails = [
  {
    name: "INDUCTION HANDI + STEEL LID",
    price: "1,040.00",
    link: "https://shopucook.com/hard-anodised-induction-compatible-handi-with-steel-lid-220-mm.html",
    img: cooker,
  },
  {
    name: "HARD ANODISED INDUCTION",
    price: "1,040.00",
    link: "https://shopucook.com/hard-anodised-induction-compatible-cook-n-serve-with-steel-lid-200-mm.html",
    img: cooker1,
  },
  {
    name: "SMART 3 IN 1 INDUCTION",
    price: "3,995.00",
    link: "https://shopucook.com/smart-3-in-1-induction-compatible-hard-anodised-aluminium-3-litre.html",
    img: cooker2,
  },
  {
    name: "COOK N SERVE WITH STEEL LID",
    price: "1,184.00",
    link: "https://shopucook.com/hard-anodised-induction-compatible-cook-n-serve-with-steel-lid-220-mm.html",
    img: cooker3,
  },
];

const Products = (props) => {
  const { setProductActive } = props;
  return (
    <div
      className="products"
      data-aos={"slide-left"}
      data-aos-delay="100"
      data-aos-mirror="false"
      data-aos-duration="900"
      data-aos-easing="ease-out"
    >
      <div id="icon">
        <img src={close} alt="close" onClick={() => setProductActive(false)} />
      </div>
      <div id="text">
        <img
          src={topproduct}
          alt="top-prod"
          onClick={() => setProductActive(true)}
        />
      </div>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        verticalSwipe={"standard"}
        axis={"vertical"}
        centerMode={true}
        centerSlidePercentage={100}
        dynamicHeight={100}
        autoPlay={true}
      >
        {ProductDetails.map((item, index) => {
          return (
            <Card key={index}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <CardBody className="card-head">
                  <CardTitle tag="p">{item.name}</CardTitle>
                </CardBody>
              </a>
              <CardImg top width="100%" src={item.img} alt="Card image cap" />
              <CardBody>
                <CardSubtitle tag="span" className="mb-2 text-muted">
                  MRP Rs.{item.price}
                </CardSubtitle>
              </CardBody>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Products;
