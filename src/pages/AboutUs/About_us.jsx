import React from "react";
import "./About_us.css";
import { Appnavbar } from "../../components/appnavbar/appnavbar";
import imgs from "../../components/assets/about1.jpeg";
import imgs2 from "../../components/assets/about2.jpeg";
import card from "../../components/assets/logos_mastercard.svg";
import atm from "../../components/assets/noto_credit-card.svg";
import money from "../../components/assets/Group.svg";
import visa from "../../components/assets/1495815261-jd08_84586 1.png";
import interswitch from "../../components/assets/download__10_-removebg-preview 1.png";
import facebook from '../../components/assets/logos_facebook.svg';
import linkedin from '../../components/assets/Group1.svg';
import X from '../../components/assets/simple-icons_x.svg';
import instagram from '../../components/assets/mdi_instagram.svg';
import { Footer } from "../../components/Footer/Footer";




const About_us = () => {
  return (
    <section id="aboutus">
      <Appnavbar />
      {/** About page section */}
      <section className="aboutPage">
        <h2>Our Story</h2>
        <div className="mainbox_about">
          {/** the first part of the About */}
          <section className="about_top">
            <div className="text-left">
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc et orci bibendum at
                nunc vel. Dui dignissim et ac gravida phasellus commodo
                imperdiet at fames. Pellentesque pharetra in blandit sed justo
                accumsan urna eu. Quam interdum quis sed aliquam sed.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. Nunc et orci bibendum at
                nunc vel. Dui dignissim et ac gravida phasellus commodo
                imperdiet at fames. Pellentesque pharetra in blandit sed justo
                accumsan urna eu. Quam interdum quis sed aliquam sed.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. Nunc et orci bibendum at
                nunc vel. Dui dignissim et ac gravida phasellus commodo
                imperdiet at fames. Pellentesque pharetra in blandit sed justo
                accumsan urna eu. Quam interdum quis sed aliquam sed.
              </p>
            </div>
            <img className="imgs" src={imgs} alt="" />
          </section>

          {/** the second part of the About */}
          <h3>How We can make your Business fly</h3>
          <section className="about_bottom">
            <img className="imgs" src={imgs2} alt="" />
            <div className="text-right">
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc et orci bibendum at
                nunc vel. Dui dignissim et ac gravida phasellus commodo
                imperdiet at fames. Pellentesque pharetra in blandit sed justo
                accumsan urna eu. Quam interdum quis sed aliquam sed.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. Nunc et orci bibendum at
                nunc vel. Dui dignissim et ac gravida phasellus commodo
                imperdiet at fames. Pellentesque pharetra in blandit sed justo
                accumsan urna eu. Quam interdum quis sed aliquam sed.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. Nunc et orci bibendum at
                nunc vel. Dui dignissim et ac gravida phasellus commodo
                imperdiet at fames. Pellentesque pharetra in blandit sed justo
                accumsan urna eu. Quam interdum quis sed aliquam sed.
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default About_us;
