import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id={9999213}
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={1500}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product
          id={2137493}
          title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
          price={1999}
          image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpg"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id={4729234}
          title="TDualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
          price={999}
          image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
          rating={5}
        />
        <Product
          id={3723472}
          title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, Xbox One Controller("
          price={2499}
          image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg"
          rating={5}
        />
        <Product
          id={3274245}
          title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
          price={499}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SL1500_.jpg"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id={3262730}
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          price={89999}
          image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
