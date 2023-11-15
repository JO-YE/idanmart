import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import shopper from "../components/assets/asian woman.png";

const Home = () => {
  return (
    <div className="landingpage">
      <div className="overlap">
        <div className="ellipse" />

        {/** Search Container*/}
        <div className="search-cont">
          <div className="search">
            <input
              className="search_input"
              type="text"
              placeholder=" Search...“Disposable Cups”"
            />
            <button className="search-button" type="button">
              Search
            </button>
          </div>
        </div>

        {/*homepage content*/}
        <div className="landingpage-body">
          <div className="textwrap">
            <div className="text1">
              <p>
                Sell online with{" "}
                <span className="idanM">
                  <b>idanMart</b>
                </span>
              </p>
            </div>
            <div className="text2">
              <p>Let over 1,000000 buyers see your Products</p>
            </div>
            <div className="text3">
              <p>
                Search anything you want by category and get it swiftly in
                idanMart
              </p>
            </div>
            <div className="register-button">
              <Link to="/registration">
                <button type="button">Get Started</button>
              </Link>
              <Link to="/">
                <button type="button">offers</button>
              </Link>
            </div>
          </div>

          {/** Image in Landing page */}
          <div className="image">
            <div className="ellipse2" />
            <img className="shopper" src={shopper} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
