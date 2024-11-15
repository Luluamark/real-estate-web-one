import React from "react";
import "./getStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings inner-width g-container">
        <div className="flex-col-center inner-container">
          <span className="primary-text">Get Started With Lulua TV</span>
          <span className="secondary-text">
            Subscribe and find super attractive price quotes <br />
            Find your residence soon
          </span>

          <button className="button">
            <a href="mailto:luluamarktv@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
