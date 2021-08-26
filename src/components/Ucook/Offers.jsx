import React from "react";
import { Carousel } from "react-responsive-carousel";

const OffersItem = [
  {
    offer: "Enjoy upto 30% discount on UCOOK products",
  },
  {
    offer: "Flat 15% Discount on Aluminium Pressure Cooker",
  },
  {
    offer: "Flat 20% discount on all Cooktop range",
  },
  {
    offer: "Flat 25% discount on Triple Cookware range",
  },
  {
    offer: "Flat 30% discount on O'bouteille Water Bottles",
  },
  {
    offer: "Flat 25% discount on Stainless Steel Combi sets",
  },
];

const Offers = () => {
  return (
    <div className="c-wrapper">
      <span className="offer-text" style={{ zIndex: 10 }}>
        OFFERS
      </span>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={100}
        dynamicHeight={100}
        autoPlay={true}
      >
        {OffersItem.map((offer, index) => {
          return (
            <div key={index} className="offer-info">
              <a
                href="https://shopucook.com/offers.html"
                target="_blank"
                rel="noreferrer"
              >
                <span className="offer">{offer.offer}</span>
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Offers;
