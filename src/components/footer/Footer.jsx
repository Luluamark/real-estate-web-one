import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings inner-width flex-center f-container">
        {/* Left side */}
        <div className="flex-col-start f-left">
          <img src="./Lulua.png" alt="" width={120} />

          <span className="secondary-text">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* Right side */}
        <div className="flex-col-start f-right">
          <span className="primary-text">Information</span>
          <span className="secondary-text">01 Ediofe TC, Arua City</span>

          <div className="flex-center f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
