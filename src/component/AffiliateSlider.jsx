import React, { memo } from "react";
import Marquee from "react-fast-marquee";
import amari from "../assets/Affiliated Network/amari.png";
import Ascott_Dhaka from "../assets/Affiliated Network/Ascott Dhaka.png";
import best_wertern_m_l from "../assets/Affiliated Network/best wertern plus mapple leaf.png";
import best_western_plus_maya from "../assets/Affiliated Network/best western plus maya.png";
import crowne_plaza from "../assets/Affiliated Network/crowne plaza.png";
import golden_tulip from "../assets/Affiliated Network/golden tulip.png";
import hansa from "../assets/Affiliated Network/hansa.jpg";
import holiday_inn from "../assets/Affiliated Network/holiday inn.jpeg";
import hotel_seraton from "../assets/Affiliated Network/hotel seraton.jpg";
import intercontinental from "../assets/Affiliated Network/intercontinental.jpeg";
import meriden from "../assets/Affiliated Network/meriden.png";
import radison_blue from "../assets/Affiliated Network/radison blue.png";
import renaissance from "../assets/Affiliated Network/renaissance.png";
import sea_pearl from "../assets/Affiliated Network/sea pearl.png";
import six_seasons from "../assets/Affiliated Network/six seasons.png";

const logos = [
  amari,
  Ascott_Dhaka,
  best_wertern_m_l,
  best_western_plus_maya,
  crowne_plaza,
  golden_tulip,
  hansa,
  holiday_inn,
  hotel_seraton,
  intercontinental,
  meriden,
  radison_blue,
  renaissance,
  sea_pearl,
  six_seasons,
];

const AffiliateSlider = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-100">
      <div className="">
        <h2 className="mb-5 text-2xl text-center font-bold text-gray-700 md:text-4xl font-heading">
          Our Affiliated Network
        </h2>
        <Marquee speed={50} gradient={false}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-24 md:h-32 lg:h-32 mx-4 md:mx-6 lg:mx-8 object-contain rounded-md"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default memo(AffiliateSlider);
