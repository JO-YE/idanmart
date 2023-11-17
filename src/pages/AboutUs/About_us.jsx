import React from "react";
import "./About_us.css";
import { Appnavbar } from "../../components/appnavbar/appnavbar";
import imgs from "../../components/assets/about1.jpeg";
import imgs2 from "../../components/assets/about2.jpeg";
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
