import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion, spring } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings inner-width flex-center hero-container ">
        {/* hero left */}
        <div className="flex-col-start hero-left">
          <div className="hero-title">
            <div className="circle" />

            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br />
              Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="flex-col-start hero-desc">
            <span className="secondary-text">
              Find variety of properties that suit you very easily
            </span>
            <span className="secondary-text">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className="flex-center search-bar">
            <HiLocationMarker color="var(--primary)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flex-center stats">
            <div className="flex-col-center stat">
              <span>
                <CountUp
                  start={8800}
                  end={9000}
                  duration={4}
                  className="color"
                />
                <span>+</span>
              </span>
              <span>Premium Customers</span>
            </div>

            <div className="flex-col-center stat">
              <span>
                <CountUp
                  start={1950}
                  end={2000}
                  duration={4}
                  className="color"
                />
                <span>+</span>
              </span>
              <span>Happy customers</span>
            </div>
            <div className="flex-col-center stat">
              <span>
                <CountUp end={28} className="color" />
                <span>+</span>
              </span>
              <span>Award winning</span>
            </div>
          </div>
        </div>

        {/* hero right */}
        <div className="flex-center hero-right">
          <motion.div
            className="img-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
