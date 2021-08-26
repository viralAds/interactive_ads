import React from "react";
import { Carousel } from "react-responsive-carousel";

const Offers = () => {
  return (
    <div className="c-wrapper">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        centerMode={true}
        centerSlidePercentage={100}
        dynamicHeight={100}
        autoPlay={true}
      >
        <div>
          <span className="offer">Flat 20% discount on all Cooktop range</span>
        </div>
        <div>
          <span className="offer">
            Flat 15% Discount on Aluminium Pressure Cooker
          </span>
        </div>
        <div>
          <span className="offer">
            Enjoy upto 30% discount on UCOOK products
          </span>
        </div>
        <div>
          <span className="offer">
            Flat 25% discount on Triple Cookware range
          </span>
        </div>
        <div>
          <span className="offer">
            Flat 30% discount on O'bouteille Water Bottles
          </span>
        </div>
        <div>
          <span className="offer">
            Flat 25% discount on Stainless Steel Combi sets
          </span>
        </div>
      </Carousel>
    </div>
  );
};

export default Offers;
