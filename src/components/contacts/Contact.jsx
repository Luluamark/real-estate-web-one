import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings inner-width flex-center c-container">
        {/* left side */}
        <div className="flex-col-start c-left">
          <span className="orange-text">Our Contacts</span>
          <span className="primary-text">Easy to contact us</span>
          <span className="secondary-text">
            We are always ready to help by providing the best service for you.
            We believe a good blace to live can make your life better
          </span>

          <div className="flex-col-start contact-modes">
            {/* first row */}
            <div className="flex-start row">
              <div className="flex-col-center mode">
                <div className="flex-start">
                  <div className="flex-center icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flex-col-start detail">
                    <span className="primary-text">Call</span>
                    <span className="secondary-text">256 785 300 477</span>
                  </div>
                </div>

                <div className="flex-center button">Call Now</div>
              </div>

              {/*second mode  */}
              <div className="flex-col-center mode">
                <div className="flex-start">
                  <div className="flex-center icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flex-col-start detail">
                    <span className="primary-text">Chat</span>
                    <span className="secondary-text">256 785 300 477</span>
                  </div>
                </div>

                <div className="flex-center button">Chat Now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flex-start row">
              <div className="flex-col-center mode">
                <div className="flex-start">
                  <div className="flex-center icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flex-col-start detail">
                    <span className="primary-text">Video Call</span>
                    <span className="secondary-text">256 785 300 477</span>
                  </div>
                </div>

                <div className="flex-center button">Video Call Now</div>
              </div>

              {/*Fourth mode  */}
              <div className="flex-col-center mode">
                <div className="flex-start">
                  <div className="flex-center icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flex-col-start detail">
                    <span className="primary-text">Message</span>
                    <span className="secondary-text">256 785 300 477</span>
                  </div>
                </div>

                <div className="flex-center button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="img-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
